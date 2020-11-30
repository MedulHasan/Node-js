const os = require('os')

// hardware
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.networkInterfaces());

// softwer
console.log(os.hostname());
console.log(os.homedir());
console.log(os.type());
console.log(os.userInfo());

console.log(os.uptime());
console.log(os.version());