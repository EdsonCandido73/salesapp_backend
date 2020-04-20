const { Model, DataTypes } = require('sequelize');

class SalesOrder extends Model {
    static init(sequelize) {
        super.init({
            date: DataTypes.DATE,
            total: DataTypes.DECIMAL(10, 2),
            delivery: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
        this.belongsToMany(models.Product, { foreignKey: 'sales_order_id', through: 'sales_orders_products', as: 'sales_orders' })
    }
}

module.exports = SalesOrder;