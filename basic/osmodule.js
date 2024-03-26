const os = require('os');

console.log(os.freemem()/(8*1024*1024));
console.log(os.uptime());