const Client = require('../models/Client');

module.exports = {
    async index(req, res) {
        const clients = await Client.findAll({
            order: ['name']
        });

        return res.json(clients);
    },

    async store(req, res) {
        const { name, nickname, birthday, cpf, address, city, email, phone1, phone2, recommendation, comments } = req.body;

        const client = await Client.create({ name, nickname, birthday, cpf, address, city, email, phone1, phone2, recommendation, comments  });

        return res.json(client);
    }
};
