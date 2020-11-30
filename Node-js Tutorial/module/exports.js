module.exports.add = (a, b) => a + b
exports.sub = (a, b) => a - b
const mul = (a, b) => a * b

const test = (a, b) => add(a, b) / sub(a, b)

// module.exports = test

// module.exports = {
//     test,
//     add
// }

// module.exports.add = add

// console.log(module);