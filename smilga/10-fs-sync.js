
const {readFileSync, writeFileSync, open} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// writeFileSync('./content/fourth.txt', second, {flag: 'ax'})
open('./content/fifth.txt', 'w', (err, td) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('File opened successfully...')
})
// console.log(first)
// console.log(second)