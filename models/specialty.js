'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.hasMany(models.Doctor_specialty, {
        foreignKey: 'specialty_id',
        as: 'Specialty',
      });
    }
  }
  Specialty.init({
    specialty: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};