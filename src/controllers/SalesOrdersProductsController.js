const SalesOrder = require('../models/SalesOrder');
const Product = require('../models/Product');
const SalesOrdersProducts = require('../models/SalesOrdersProducts');

module.exports = {
    async index(req, res) {
        const { sales_order_id } = req.params;

        const sales_order = await SalesOrder.findByPk(sales_order_id, {
            include: { association: 'sales_orders' }
        });
        
        return res.json(sales_order);
    },


    async store(req, res) {
        const { sales_order_id } = req.params;
        const { product_id, quantity, discount, price } = req.body;

        const sales_order = await SalesOrder.findByPk(sales_order_id);

        if (!sales_order) {
            return res.status(400).json({ error: 'Pedido não encontrado' });
        }

        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        const sales_orders_products = await SalesOrdersProducts.create({
            sales_order_id,
            product_id,
            quantity,
            discount,
            price,
        });

        return res.json(sales_orders_products);
    }
};
