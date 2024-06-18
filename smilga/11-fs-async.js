const {readFile, writeFile, open} = require('fs')

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err.message);
    }
    const first = data;
    readFile('./content/first.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err.message);
        }
        const second = data;
        writeFile('./content/first.txt', 'utf8', (err, data) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(data)
        }
        )
    }
    )
})