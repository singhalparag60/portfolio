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
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9223',
    '--window-size=1440,900',
    'http://127.0.0.1:5173/'
  ]);

  let targets = null;
  for (let i = 0; i < 20; i++) {
    await sleep(500);
    try {
      targets = await getJson('http://127.0.0.1:9223/json');
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
  await sleep(2500);

  // 1. Desktop Screenshot
  console.log('Capturing Desktop Screenshot...');
  const desktopCapture = await send('Page.captureScreenshot', { format: 'png' });
  const desktopPath = path.join(__dirname, 'portfolio-desktop.png');
  fs.writeFileSync(desktopPath, Buffer.from(desktopCapture.data, 'base64'));
  console.log('Desktop screenshot saved to:', desktopPath);

  // 2. Mobile Screenshot
  console.log('Emulating iPhone / Mobile (390x844)...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await sleep(1000);

  const mobileCapture = await send('Page.captureScreenshot', { format: 'png' });
  const mobilePath = path.join(__dirname, 'portfolio-mobile.png');
  fs.writeFileSync(mobilePath, Buffer.from(mobileCapture.data, 'base64'));
  console.log('Mobile screenshot saved to:', mobilePath);

  ws.close();
  edge.kill();
  console.log('Screenshots captured successfully!');
}

capture().catch(console.error);
