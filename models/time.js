  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Time extends Model {
      static associate(models) {
        Time.hasMany(models.Drug_varient, {
          foreignKey: 'time_id',
          as: 'drugVariantsTime',
        });

        Time.hasMany(models.Rx_group_drug, {
          foreignKey: 'time_id',
          as: 'Time-drug',
        });
      }
    }
    Time.init({
      time: DataTypes.STRING,
      isactive: DataTypes.BOOLEAN
    }, {
      sequelize,
      modelName: 'Time',
    });
    return Time;
  };