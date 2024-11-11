const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/users.controller')

usersRouter.get('/', userController.getUsersRoute)
usersRouter.get('/:id', userController.getUserRoute)

module.exports = usersRouter