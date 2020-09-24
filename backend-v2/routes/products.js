// Router
const { Router } = require('express');
const router = new Router();

// Database
const { db } = require('./../db')

// Routes
router.get('/', (req, res) => {

    let products = db.get('products').value()
    res.send({ products: products })
})

module.exports = router