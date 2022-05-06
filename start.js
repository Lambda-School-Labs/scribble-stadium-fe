/* eslint-disable */

const { spawn } = require('child_process');
const { Buffer } = require('buffer');

const ls = spawn(/^win/.test(process.platform) ? 'npx.cmd' : 'npx', [
  'craco',
  'start',
]);

ls.stdout.on('data', data => {
  console.log(`${data}`);
  if (data.toString().includes('To ignore, add')) {
    console.log(Buffer.from('VGltZTJjb2RlIQ==', 'base64').toString('binary'));
  }
});

ls.stderr.on('ERROR', data => {
  console.log(`stderr: ${data}`);
});

ls.on('error', error => {
  console.log(`error: ${error.message}`);
});
