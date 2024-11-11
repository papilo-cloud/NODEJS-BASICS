const express = require('express')
const emailsRouter = express.Router()
const emailController = require('../controllers/email.controller')


// let upload = multer({
//     dest: path.join(__dirname, '../uploads')
// })


emailsRouter.route('/')
    .get(emailController.getEmailsRoute)
    .post(emailController.upload.array('file'), emailController.createEmailRoute)
emailsRouter.route('/:id')
    .get(emailController.getEmailRoute)
    .put(emailController.updateEmailRoute)
    .delete(emailController.deleteEmailRoute)


module.exports = emailsRouter