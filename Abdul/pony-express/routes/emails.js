const express = require('express')
const path = require('path')
const emails = require('../fixtures/emails.json')
const generateId = require('../lib/generate-id')
const multer = require('multer')
const emailsRouter = express.Router()


// let upload = multer({
//     dest: path.join(__dirname, '../uploads')
// })

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, res, cb) => {
        cb(null, 'hello.jpg')
    }
})
class NotFound extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFound'
    }
}
let getEmailsRoute = (req, res, next) => {
    res.send(emails)
}

let getEmailRoute = (req, res) => {
    let email = emails.find(email => email.id == req.params.id)
    if (!email) {
        throw new NotFound();
    }
    res.send(email)
}

let createEmailRoute = async (req, res) => {
    let file = (req.files || []).map(file => file.filename)
    let newEmail = {...req.body, id: generateId(), file}
    emails.push(newEmail)
    res.status(201)
    res.send(newEmail)
}

// Mutation is generally a bad practice, but we just used mutation to keep
// things simple. Production backends would typically use a DB anyways
let updateEmailRoute = async (req, res) => {
    let email = emails.find(email => email.id == req.params.id)
    Object.assign(email, req.body) 
    res.status(200)
    res.send(email)
}

let deleteEmailRoute = (req, res) => {
    let index = emails.findIndex(email => email.id == req.params.id)
    emails.splice(index, 1)
    res.sendStatus(204)
}

const upload = multer({storage})

emailsRouter.route('/')
    .get(getEmailsRoute)
    .post(upload.array('file'), createEmailRoute)
emailsRouter.route('/:id')
    .get(getEmailRoute)
    .put(updateEmailRoute)
    .delete(deleteEmailRoute)


module.exports = emailsRouter