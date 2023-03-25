"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("animals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      locationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "locations",
          key: "id",
        },
        allowNull: true,
      },
      lifespan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      habitat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      range: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("animals");
  },
};
