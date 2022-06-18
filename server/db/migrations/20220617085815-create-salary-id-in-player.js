'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('table_name', 'field_one_name', {
      type: Sequelize.STRING
  },
  async down(queryInterface, Sequelize) {
  }
};
