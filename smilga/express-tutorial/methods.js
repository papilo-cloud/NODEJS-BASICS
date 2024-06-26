const express = require('express')
const app = express();
let {people} = require('./data')
// static data
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json 
app.use(express.json())

app.post('/login', (req, res) => {
    const {name} = req.body;

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send('Please provide credentials')
    }
})

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

app.post('/api/postman/people', (req, res) => {
    const { name, id } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({success: false, msg: 'please provide a name value'})
    }
    res.status(201).json({success: true, data: [...people, {id, name}]})
})


app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find(person => person.id === Number(id))
    if (!person) {
        return res
                .status(404)
                .json(
                        {
                            success: false, 
                            msg: `no person with id ${id} found`
                        }
                    )
    }
    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(201)
        .json(newPeople)
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params

    const person = people.find(person => person.id === Number(id))
    if (!person) {
        return res
                .status(404)
                .json(
                    {
                        success: false, 
                        msg: `no person with id ${id} found`
                    }
                )
    }
    const newPeople = people.filter(person => person.id !== Number(id))
    res.status(201)
        .json(newPeople)
})

app.listen(5000, () => {
    console.log('Server listening on port 5000....')
})