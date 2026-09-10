const https = require('https');

const host = 'jichangbay.biz';
const key = 'clashwiki-indexnow-key-2026';
const keyLocation = `https://${host}/${key}.txt`;

const data = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: [
    `https://${host}/`,
    `https://${host}/airports/`,
    `https://${host}/compare/`,
  ]
});

const options = {
  hostname: 'www.bing.com',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  console.log(`IndexNow Status: ${res.statusCode}`);
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
