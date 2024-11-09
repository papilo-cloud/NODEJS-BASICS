const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const emailsRouter = require('./routes/emails')

app.use('/users', usersRouter)
app.use('/emails', emailsRouter)

app.listen(3000)