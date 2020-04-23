const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        
        console.log(user.dataValues.password);
        console.log(password);

        if (user.dataValues.password === password) {
            return res.json(user);
        } else {
            return res.status(400).json({ error: "Invalid password" });
        }

    }
};