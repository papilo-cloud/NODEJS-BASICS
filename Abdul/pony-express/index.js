const http = require('http')

let server = http.createServer((req, res) => {
    let route = req.method + ' ' + req.url
    console.log(res)
    res.end('You asked for '+ route)
})

server.listen(3000)