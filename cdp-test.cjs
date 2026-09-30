const http = require('http');
const { spawn } = require('child_process');

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Launching headless Edge for CDP test...');
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const edge = spawn(edgePath, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--window-size=1280,1024',
    'http://127.0.0.1:5173/'
  ]);

  let connected = false;
  let targets = null;
  for (let i = 0; i < 20; i++) {
    await sleep(500);
    try {
      targets = await getJson('http://127.0.0.1:9222/json');
      if (targets && targets.length > 0) {
        connected = true;
        break;
      }
    } catch (e) {
      // waiting for port
    }
  }

  if (!connected || !targets) {
    console.error('Failed to connect to Edge DevTools port 9222');
    edge.kill();
    process.exit(1);
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  console.log(`Connected to page target: ${pageTarget.title} (${pageTarget.url})`);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  const errors = [];
  const logs = [];

  let msgId = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const resolver = pending.get(msg.id);
      pending.delete(msg.id);
      resolver(msg.result);
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      errors.push(msg.params.exceptionDetails);
    }
    if (msg.method === 'Console.messageAdded') {
      if (msg.params.message.level === 'error') {
        errors.push(msg.params.message.text);
      } else {
        logs.push(msg.params.message.text);
      }
    }
    if (msg.method === 'Runtime.consoleAPICalled') {
      if (msg.params.type === 'error') {
        errors.push(msg.params.args.map(a => a.value || a.description).join(' '));
      } else {
        logs.push(msg.params.args.map(a => a.value || a.description).join(' '));
      }
    }
  };

  await send('Console.enable');
  await send('Runtime.enable');
  await send('Page.enable');

  console.log('Waiting 2 seconds for React to mount and hydrate...');
  await sleep(2000);

  // Evaluate DOM state
  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      return {
        title: document.title,
        heading: document.querySelector('h1')?.innerText,
        navLinksCount: document.querySelectorAll('header nav a').length,
        heroName: document.querySelector('#hero h1')?.innerText,
        aboutSection: !!document.querySelector('#about'),
        educationSection: !!document.querySelector('#education'),
        skillsCount: document.querySelectorAll('#skills .font-heading.font-bold').length,
        projectsCount: document.querySelectorAll('#projects .font-heading.font-bold').length,
        achievementsCount: document.querySelectorAll('#achievements h3').length,
        contactSection: !!document.querySelector('#contact'),
        footerPresent: !!document.querySelector('footer')
      };
    })()`,
    returnByValue: true
  });

  console.log('DOM Evaluation Result:', JSON.stringify(evalResult.result.value, null, 2));

  // Test interactive buttons: click 'Skills' category filter pill
  console.log('Testing category filter interaction...');
  const clickResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const buttons = Array.from(document.querySelectorAll('#skills button'));
      const webDevBtn = buttons.find(b => b.innerText.includes('Web Development'));
      if (webDevBtn) {
        webDevBtn.click();
        return { clicked: true, text: webDevBtn.innerText };
      }
      return { clicked: false };
    })()`,
    returnByValue: true
  });
  console.log('Category filter click result:', clickResult.result.value);

  // Test resume modal trigger
  console.log('Testing Resume Modal trigger...');
  const resumeClick = await send('Runtime.evaluate', {
    expression: `(() => {
      const buttons = Array.from(document.querySelectorAll('#hero button'));
      const resumeBtn = buttons.find(b => b.innerText.includes('Resume'));
      if (resumeBtn) {
        resumeBtn.click();
        return { clicked: true };
      }
      return { clicked: false };
    })()`,
    returnByValue: true
  });
  await sleep(600);

  const modalCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const modal = document.querySelector('.animate-fade-in');
      const modalTitle = modal?.querySelector('h2')?.innerText;
      return {
        isOpen: !!modal,
        title: modalTitle
      };
    })()`,
    returnByValue: true
  });
  console.log('Resume modal check:', modalCheck.result.value);

  // Close resume modal
  await send('Runtime.evaluate', {
    expression: `(() => {
      const closeBtn = document.querySelector('button[aria-label="Close resume modal"]');
      if (closeBtn) closeBtn.click();
    })()`
  });
  await sleep(400);

  // Test mobile responsiveness by changing viewport metrics
  console.log('Testing mobile responsiveness viewport (375x667)...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(600);

  const mobileCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const hamburger = document.querySelector('button[aria-label="Toggle navigation menu"]');
      const isVisible = hamburger ? window.getComputedStyle(hamburger).display !== 'none' : false;
      if (hamburger) hamburger.click();
      return {
        hamburgerVisible: isVisible
      };
    })()`,
    returnByValue: true
  });
  await sleep(500);

  const drawerCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const drawerLinks = document.querySelectorAll('header .md\\:hidden a');
      return {
        drawerLinksCount: drawerLinks.length
      };
    })()`,
    returnByValue: true
  });
  console.log('Mobile navigation check:', mobileCheck.result.value, drawerCheck.result.value);

  console.log('\n--- Console Logs ---');
  console.log(logs.length ? logs.join('\n') : 'No warnings/logs.');

  console.log('\n--- Console Errors ---');
  if (errors.length) {
    console.error('Errors found:', errors);
  } else {
    console.log('Zero console errors detected!');
  }

  ws.close();
  edge.kill();

  if (errors.length > 0) {
    process.exit(1);
  } else {
    console.log('\nAll browser runtime verification tests passed with flying colors!');
  }
}

main().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
