const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function capture() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const edge = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    '--run-all-compositor-stages-before-draw',
    '--remote-debugging-port=9226',
    '--window-size=1400,900',
    'about:blank'
  ]);

  let targets = null;
  for (let i = 0; i < 20; i++) {
    await sleep(400);
    try {
      targets = await getJson('http://127.0.0.1:9226/json');
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  if (!targets) {
    edge.kill();
    process.exit(1);
  }

  const page = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise(resolve => ws.onopen = resolve);

  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.id && pending.has(msg.id)) {
      const res = pending.get(msg.id);
      pending.delete(msg.id);
      res(msg.result);
    }
  };

  await send('Page.enable');
  await send('Runtime.enable');

  console.log('Navigating to http://127.0.0.1:5173/ ...');
  await send('Page.navigate', { url: 'http://127.0.0.1:5173/' });
  await sleep(2500);

  const destDir = path.resolve('C:\\Users\\spara\\.gemini\\antigravity\\brain\\1bb79ea7-cc93-40a5-b0e0-95421461678e');

  // 1. Hero
  console.log('Capturing Hero view...');
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
  await sleep(800);
  const heroCap = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  fs.writeFileSync(path.join(destDir, 'portfolio-hero.png'), Buffer.from(heroCap.data, 'base64'));

  // 2. Education & Skills
  console.log('Capturing Education & Skills...');
  await send('Runtime.evaluate', {
    expression: `document.getElementById('skills').scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await sleep(1000);
  const skillsCap = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  fs.writeFileSync(path.join(destDir, 'portfolio-skills.png'), Buffer.from(skillsCap.data, 'base64'));

  // 3. Projects
  console.log('Capturing Projects...');
  await send('Runtime.evaluate', {
    expression: `document.getElementById('projects').scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await sleep(1000);
  const projCap = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  fs.writeFileSync(path.join(destDir, 'portfolio-projects.png'), Buffer.from(projCap.data, 'base64'));

  // 4. Contact
  console.log('Capturing Contact...');
  await send('Runtime.evaluate', {
    expression: `document.getElementById('contact').scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await sleep(1000);
  const contactCap = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  fs.writeFileSync(path.join(destDir, 'portfolio-contact.png'), Buffer.from(contactCap.data, 'base64'));

  ws.close();
  edge.kill();
  console.log('All gallery screenshots saved successfully!');
}

capture().catch(console.error);
