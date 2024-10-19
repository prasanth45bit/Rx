'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duration extends Model {
    static associate(models) {
      Duration.hasMany(models.Drug_varient, {
        foreignKey: 'duration_id',
        as: 'drugVariantsDuration',
      });

      Duration.hasMany(models.Rx_group_drug, {
        foreignKey: 'duration_id',
        as: 'duration_for',
      });
    }
  }
  Duration.init({
    duration_count: DataTypes.INTEGER,
    duration_type: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Duration',
  });
  return Duration;
};