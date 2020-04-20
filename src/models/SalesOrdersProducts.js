const { Model, DataTypes } = require('sequelize');

class SalesOrdersProducts extends Model {
    static init(sequelize) {
        super.init({
            sales_order_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            discount: DataTypes.DECIMAL(4, 2),
            price: DataTypes.DECIMAL(10, 2),
        }, {
            sequelize
        })
    }
}

module.exports = SalesOrdersProducts;
