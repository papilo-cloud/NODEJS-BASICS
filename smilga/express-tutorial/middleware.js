const express = require('express')
const app = express()

// req => middleware => res 

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year)
    // res.send('Listening')
    next()
}

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(8000, () => {
    'App listening on port 8000'
})