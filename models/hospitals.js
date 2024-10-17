'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospitals extends Model {
    static associate(models) {

      Hospitals.hasMany(models.Doctor_hospitals, {
        foreignKey: 'hospital_id',
        as: 'Hospital',
      });
    }
  }
  Hospitals.init({
    hospital_name: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospitals;
};