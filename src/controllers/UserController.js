const User = require('../models/User');

module.exports = {
    async index(req, res) {
        // const users = await User.findAll();
        const { email, password } = req.body;


        console.log(req)

        const user = await User.findOne({ where: { email: req.body.email } });

        return res.json(user);
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        console.log(req.body)

        const user = await User.create({ name, email, password });

        return res.json(user);
    }
};