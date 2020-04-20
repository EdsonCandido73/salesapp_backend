const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            nickname: DataTypes.STRING,
            birthday: DataTypes.DATE,
            cpf: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            email: DataTypes.STRING,
            phone1: DataTypes.STRING,
            phone2: DataTypes.STRING,
            recommendation: DataTypes.STRING,
            comments: DataTypes.TEXT,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.SalesOrder, { foreignKey: 'client_id', as: 'sales_orders' });
    }

}

module.exports = Client;