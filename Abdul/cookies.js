// Handling cookies
const app = require('express')()
const cookieParser = require('cookie-parser')
// setting client cookies
// Testing cookie using curl: curl http://127.0.0.1:port -i
app.use((req, res) => {
    res.cookie('name', 'foo')
    res.end('Hello!')
})


// Parsing cookie into JS object using 'cookie-parser'

.use(cookieParser())
.use((req, res) => {
    if (req.cookies.name) {
        console.log('User name:', req.cookies.name)
    } else {
        res.cookie('name', 'foo')
    }
    res.end('Hello!')
})