var http = require('http');
var config = require('./something/config')
var url = require('url')
var fs = require('fs');
var events = require('events')
var eventEmitter = new events.EventEmitter()
var formidable = require('formidable');
var argv = require('optimist').argv
delete argv['$0']

// http.createServer((req, res) => {
//     let q = url.parse(req.url)
//     let fname = "." + q.pathname
//     fs.readFile(fname, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type':'text/html'})
//             return res.end('404 Not Found')
//         }
//         res.writeHead(200, {'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(3000)
var now = new Date(2007, 1, 0)
console.log(now.toJSON())
