const express = require('express')
const router = express.Router()
const {
    getPeople,
    postPeople,
    postPeoplePostman,
    updatePeople,
    deletePeople
} = require('../controllers/people')

router.get('/', getPeople)

router.post('/', postPeople)

router.post('/postman', postPeoplePostman)

router.put('/:id', updatePeople)

router.delete('/:id', deletePeople)

module.exports = router