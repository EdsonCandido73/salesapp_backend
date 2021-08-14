const express = require('express');

const UserController = require('./controllers/UserController');
const AuthenticateController = require('./controllers/AuthenticateController');
const ClientControlller = require('./controllers/ClientControlller');
const SalesOrderController = require('./controllers/SalesOrderController');
const ProductController = require('./controllers/ProductController');
const SalesOrdersProductsController = require('./controllers/SalesOrdersProductsController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/authenticate', AuthenticateController.index);

routes.get('/clients', ClientControlller.index);
routes.post('/clients', ClientControlller.store);

routes.get('/clients/:client_id/sales_orders', SalesOrderController.index);
routes.post('/clients/:client_id/sales_orders', SalesOrderController.store);
 //passar Id do cliente na rota

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

routes.get('/sales_order/:sales_order_id/sales_orders_products', SalesOrdersProductsController.index);
routes.post('/sales_order/:sales_order_id/sales_orders_products', SalesOrdersProductsController.store);
 //passar Id do pedido na rota

module.exports = routes;
