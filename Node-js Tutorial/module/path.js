const mypath = require('path')
const myCurrentPath = __filename
console.log(__filename); //full file path
console.log(mypath.basename(__filename)); //file name
console.log(mypath.basename(__dirname)); //directory name
console.log(mypath.extname(myCurrentPath)); //file extention

// create our own path using 'formate'
let pathobj = {
    dir: 'dir',
    // root: 'root',
    // base: 'base',
    name: 'name',
    ext: '.js'
}
console.log(mypath.format(pathobj));

console.log(mypath.isAbsolute('/math'));

console.log(mypath.join('a', 'b', 'c', 'd.js'));

console.log(mypath.resolve(__dirname, 'medul', 'abc.js'));

console.log(mypath.parse(myCurrentPath));