const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="api/product">products</a>')
})

// Sending back all products
// app.get('/api/product', (req, res) => {
//     res.json(products)
// })
// # Route Parameter
// ## Sending back minimal product without description
app.get('/api/product', (req, res) => {
    const newProduct = products.map(product => {
        const {id, name, image, price} = product
        return {id, name, image, price}
    })
    res.json(newProduct)
})

// ## Searching for a particular product by id
app.get('/api/product/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = products.find(product => product.id == productID)
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})


// # Query/URL Parameters
// ## Advance search query
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query;

    let sortedProduct = [...products];

    if (search) {
        sortedProduct = sortedProduct.filter(product => product.name.startsWith(search))
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length < 1) {
        return res.status(200).send('No products match your search...')
    }
    res.status(200).json(sortedProduct)
})

app.listen(5000)