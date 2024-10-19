'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class When extends Model {
    static associate(models) {
      When.hasMany(models.Drug_varient, {
        foreignKey: 'when_id',
        as: 'drugVariantsWhen',
      });

      When.hasMany(models.Rx_group_drug, {
        foreignKey: 'when_id',
        as: 'When_drug',
      });
    }
  }
  When.init({
    when: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'When',
  });
  return When;
};