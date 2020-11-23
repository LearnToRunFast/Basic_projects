const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo connection open");
    })
    .catch(err => {
        console.log(err);
    })

// const p = new Product({
//     name: "Ruby grapefruit",
//     price: 1.99,
//     category: 'fruit'

// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const productType = {
    FRUIT: 'fruit',
    VEGATABLE: 'vegatable',
    DAIRY: 'dairy',
}

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: productType.VEGATABLE
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: productType.FRUIT
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: productType.FRUIT
    },
    {
        name: "Organic Celery",
        price: 1.50,
        category: productType.VEGATABLE
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: productType.DAIRY
    },
]
Product.insertMany(seedProducts)
    .then( res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e)
    })