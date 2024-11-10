const readBody = require('../lib/read-body')

let jsonBodyParser = async (req, res, next) => {
    let body = await readBody(req)
    req.body = JSON.parse(body)
    next()
}

module.exports = jsonBodyParser