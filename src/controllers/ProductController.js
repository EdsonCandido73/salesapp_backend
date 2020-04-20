const Product = require('../models/Product');


module.exports = {
    async index(req, res) {
        const produtcs = await Product.findAll();

        return res.json(produtcs);
    },


    async store(req, res) {
        const { codbar, description, unit, manufacturer, stock, costprice, saleprice } = req.body;

        const product = await Product.create({ codbar, description, unit, manufacturer, stock, costprice, saleprice  });

        return res.json(product);
    }
};
