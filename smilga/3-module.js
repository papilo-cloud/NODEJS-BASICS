// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const secret = 'SUPER SECRET';
const john = 'John'
const peter = 'Peter'

const names = require('./3-module')
const greet = require('./4-module')
console.log(greet.sayHi(names.john))

module.exports = {john, peter}