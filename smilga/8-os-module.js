const os = require('os')
const user = os.userInfo()

console.log(`The system uptime is: ${os.uptime()}`)

const currentUser = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentUser)