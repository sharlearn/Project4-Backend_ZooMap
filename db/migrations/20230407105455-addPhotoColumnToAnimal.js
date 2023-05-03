"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("animals", "bannerUrl", Sequelize.STRING);
    queryInterface.addColumn("animals", "iconUrl", Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("animals", "iconUrl");
    queryInterface.removeColumn("animals", "bannerUrl");
  },
};
