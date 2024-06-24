const express = require('express')
const app = express()
const {logger} = require('./logger')
const authorize = require('./authorize')

// req => middleware => res 
// 1. use / route
// 2. options - our own / express / third party

// We are importing the middleware as a separate module.
// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const year = new Date().getFullYear();
//     console.log(method, url, year)
//     // res.send('Listening')
//     next()
// }

// Instead of calling the logger function everytime we use it, we can simply call it inside app.use() once.

app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('Hello World...')
})

app.listen(5000, () => {
    'App listening on port 8000'
})