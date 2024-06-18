const http = require('http')

const server =http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage')
    }
    if (req.url === '/about') {
        res.end('Thos is the about page')
    }
    res.end(
        `
        <h1>OOPS</h1>
        <p>This page you're looking for doesn't exist... keep browsing.</p>
        `
    )

})
server.listen(8000)