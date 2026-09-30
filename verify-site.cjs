const http = require('http');

const endpoints = [
  '/',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/data/portfolioData.js',
  '/src/components/Navbar.jsx',
  '/src/components/Hero.jsx',
  '/src/components/About.jsx',
  '/src/components/Education.jsx',
  '/src/components/Skills.jsx',
  '/src/components/Projects.jsx',
  '/src/components/Achievements.jsx',
  '/src/components/Contact.jsx',
  '/src/components/Footer.jsx',
  '/src/components/ResumeModal.jsx',
  '/src/components/Icons.jsx',
  '/src/index.css'
];

async function checkEndpoint(path) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:5173${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          size: data.length,
          snippet: data.slice(0, 150)
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing Vite Dev Server Endpoints...');
  let failed = 0;
  for (const ep of endpoints) {
    const res = await checkEndpoint(ep);
    if (res.statusCode === 200) {
      console.log(`[PASS] ${ep} - Status: 200 (${res.size} bytes)`);
    } else {
      console.error(`[FAIL] ${ep} - Status: ${res.statusCode || 'ERR'}`, res);
      failed++;
    }
  }
  if (failed === 0) {
    console.log('\nAll endpoints and components loaded with HTTP 200 OK! Zero compile errors.');
  } else {
    console.error(`\n${failed} endpoints failed.`);
    process.exit(1);
  }
}

run();
