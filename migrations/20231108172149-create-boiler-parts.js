'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BoilerParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      boiler_manufacturer: {
        type: Sequelize.STRING,
      },
      parts_manufacturer: {
        type: Sequelize.STRING,
      },
      product_price: {
        type: Sequelize.INTEGER,
      },
      vendor_code: {
        type: Sequelize.STRING,
      },
      product_name: {
        type: Sequelize.STRING,
      },
      product_description: {
        type: Sequelize.STRING(2048),
      },
      images: {
        type: Sequelize.STRING(2048),
      },
      in_stock: {
        type: Sequelize.INTEGER,
      },
      bestseller: {
        type: Sequelize.BOOLEAN,
      },
      new_product: {
        type: Sequelize.BOOLEAN,
      },
      popularity_product: {
        type: Sequelize.INTEGER,
      },
      compatibility: {
        type: Sequelize.STRING(2048),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BoilerParts');
  },
};
