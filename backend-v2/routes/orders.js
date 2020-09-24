// Utils
const { v4: uuidv4 } = require('uuid');

// Router
const { Router } = require('express');
const router = new Router();

// Database
const { db } = require('./../db')

// Routes
router.post('/', (req, res) => {

    console.log('Order recieved')
    
    // Construct order 
    let order = {
        orderNr: uuidv4(), // Generate uuid,
        timeStamp: Date.now(),
        items: req.body.items,
        totalOrderValue: req.body.items.reduce((acc, item) => acc + item.price, 0)
    }

    // Add order to db
    db.get('orders')
    .push(order)
    .write()

    console.log(`Order ${order.orderNr} stored in db.`)

    res.send({ msg: 'Thanks!', orderNr: order.orderNr })
})

module.exports = router