const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;

    const singleProducts = products.find((products) => products.id === Number(productID));

if (!singleProducts) {
    return res.status(404).send('Product Does Not Exist');
}

    console.log(singleProducts)
    res.json(singleProducts);
});

app.get ('/api/products/:productID/reviews/reviewID', (req, res) => {
    res.send('Hello World');
})

app.listen(5000, () => {
    console.log('Server is running on 5000');
    });