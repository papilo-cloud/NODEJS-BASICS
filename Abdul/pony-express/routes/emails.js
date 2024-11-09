const express = require('express')
const emails = require('../fixtures/emails.json')
const readBody = require('../lib/read-body')
const generateId = require('../lib/generate-id')
const emailsRouter = express.Router()

let getEmailsRoute = (req, res) => {
    res.send(emails)
}

let getEmailRoute = (req, res) => {
    let email = emails.find(email => email.id == req.params.id)
    res.send(email)
}

let createEmailRoute = async (req, res) => {
    let body = await readBody(req)
    let newEmail = {...JSON.parse(body), id: generateId()}
    emails.push(newEmail)
    res.status(201)
    res.send(newEmail)
}

// Mutation is generally a bad practice, but we just used mutation to keep
// things simple. Production backends would typically use a DB anyways
let updateEmailRoute = async (req, res) => {
    let body = await readBody(req)
    let email = emails.find(email => email.id == req.params.id)
    Object.assign(email, JSON.parse(body)) 
    res.status(200)
    res.send(email)
}

let deleteEmailRoute = (req, res) => {
    let index = emails.findIndex(email => email.id == req.params.id)
    emails.splice(index, 1)
    res.sendStatus(204)
}

emailsRouter.route('/')
    .get(getEmailsRoute)
    .post(createEmailRoute)
emailsRouter.route('/:id')
    .get(getEmailRoute)
    .put(updateEmailRoute)
    .delete(deleteEmailRoute)


module.exports = emailsRouter