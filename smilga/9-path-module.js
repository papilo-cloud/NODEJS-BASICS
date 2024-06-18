const path = require('path')

const filePath = path.join('/content', 'subfolder', 'file.txt')
const base = path.basename(filePath)
const abs = path.resolve(__dirname,)
console.log(abs)