const http = require('http')

const server =http.createServer((req, res) => {
    res.write('Hello Node.js')
    res.end()

})
server.listen(8000)
console.log('Hello people')