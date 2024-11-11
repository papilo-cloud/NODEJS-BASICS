const users = require('../fixtures/users.json')

let findUserByCredentials = (username, password) => {
    return users.find(user => user.username == username && user.password == password)
}

let basicAuth = (req, res, next) => {
    let header = req.headers.authorization || ''
    let [type, payload] = header.split(' ')
    if (type == 'Basic') {
        let credentials = Buffer.from(payload, 'base64').toString('ascii')
        let [username, password] = credentials.split(':')

        let user = findUserByCredentials(username, password)
        console.log(user)
    }

    next()
}

module.exports = basicAuth