const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            codbar: DataTypes.STRING,
            description: DataTypes.STRING,
            unit: DataTypes.STRING,
            manufacturer: DataTypes.STRING,
            stock: DataTypes.INTEGER,
            costprice: DataTypes.DECIMAL(10, 2),
            saleprice: DataTypes.DECIMAL(10, 2),
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.SalesOrder, { foreignKey: 'product_id', through: 'sales_orders_products', as: 'products' })
    }

}

module.exports = Product;