const Necklace = require('../models/necklace');

exports.postAddNecklace = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const necklace = new Necklace({ title: title, price: price, description: description });

    product
        .save()
        .then(result => {
            console.log('Product Created');
            res.redirect('/products');
        })
        .catch(err => {
            console.log(err);
        });
}