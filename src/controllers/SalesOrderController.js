const Client = require('../models/Client');
const SalesOrder = require('../models/SalesOrder');

module.exports = {
    async index(req, res) {
        const { client_id } = req.params;

        const client = await Client.findByPk(client_id, {
            include: { association: 'sales_orders' }
        });
        
        return res.json(client);
    },


    async store(req, res) {
        const { client_id } = req.params;
        const { date, total, delivery } = req.body;

        const client = await Client.findByPk(client_id);

        if (!client) {
            return res.status(400).json({ error: 'Cliente não encontrado' });
        }

        const sales_order = await SalesOrder.create({
            date,
            total,
            delivery,
            client_id,
        });

        return res.json(sales_order);
    }
};
