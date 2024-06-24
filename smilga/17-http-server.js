const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const text = fs.readFileSync('./smilga/content/big.txt', 'utf8')
    res.end()
})
.listen(8000)