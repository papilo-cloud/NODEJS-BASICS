let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const postPeople = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(404)
        .json({success: false, msg: 'Please provide a name valaue'})
    }
    res.status(201).json({success: true, person: name})
}

const postPeoplePostman = (req, res) => {
    const { name, id } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({success: false, msg: 'please provide a name value'})
    }
    res.status(201).json({success: true, data: [...people, {id, name}]})
}

const updatePeople = (req, res) => {
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
}

const deletePeople = (req, res) => {
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
}

module.exports = {
    getPeople,
    postPeople,
    postPeoplePostman,
    updatePeople,
    deletePeople
}