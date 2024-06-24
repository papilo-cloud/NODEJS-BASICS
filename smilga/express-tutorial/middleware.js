const express = require('express')
const app = express()
const {logger} = require('./logger')

// req => middleware => res 

// We are importing the middleware as a separate module.
// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const year = new Date().getFullYear();
//     console.log(method, url, year)
//     // res.send('Listening')
//     next()
// }

app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    'App listening on port 8000'
})