const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Client = require('../models/Client');
const SalesOrder = require('../models/SalesOrder');
const Product = require('../models/Product');
const SalesOrdersProducts = require('../models/SalesOrdersProducts');

const connection = new Sequelize(dbConfig);

User.init(connection);
Client.init(connection);
SalesOrder.init(connection);
Product.init(connection);
SalesOrdersProducts.init(connection);

Client.associate(connection.models);
SalesOrder.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;
