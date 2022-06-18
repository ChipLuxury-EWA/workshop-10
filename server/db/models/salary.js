'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salary.belongsTo(models.Player, {foreignKey: 'player_id'})
    }
  }
  Salary.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Salary',
  });
  return Salary;
};