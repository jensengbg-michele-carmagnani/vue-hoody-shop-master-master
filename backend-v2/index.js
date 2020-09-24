const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

// products
app.use('/products', productsRoute)

// orders
app.use('/orders', ordersRoute)

// static assets
app.use('/assets', express.static('./assets'))

const PORT = 5000;

app.listen(PORT,() => {
    console.log('Server is up n running!')
})