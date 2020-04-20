'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_orders_products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sales_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sales_orders', key: 'id' }, //cria o relacionamento com a tabela de pedidos
        onUpdate: 'CASCADE',  // se a chave do pedido for alterada altera nos pedidos tambem
        onDelete: 'CASCADE',  // se o pedido for deletado vai deletar a movimentação tambem
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'products', key: 'id' }, //cria o relacionamento com a tabela de produtos
        onUpdate: 'CASCADE',  // se a chave do produto for alterada altera nos pedidos tambem
        onDelete: 'RESTRICT',  // não permite deletar o produto de tiver pedido relacionado
      }, 
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sales_orders_products');
  }
};
