const express = require('express')
const router = express.Router()

let { people } = require('../data')

router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

router.post('/', (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(404)
        .json({success: false, msg: 'Please provide a name valaue'})
    }
    res.status(201).json({success: true, person: name})
})

router.post('/postman', (req, res) => {
    const { name, id } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({success: false, msg: 'please provide a name value'})
    }
    res.status(201).json({success: true, data: [...people, {id, name}]})
})


router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router