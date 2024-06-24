const express = require('express')
const app = express();
let {people} = require('./data')
// static data
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json 
app.use(express.json())


app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(404)
        .json({success: false, msg: 'Please provide a name valaue'})
    }
    res.status(201).json({success: true, person: name})
})
app.post('/login', (req, res) => {
    const {name} = req.body;

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send('Please provide credentials')
    }
})

app.listen(5000, () => {
    console.log('Server listening on port 5000....')
})