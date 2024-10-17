'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_specialty extends Model {

    static associate(models) {
      
      Doctor_specialty.belongsTo(models.Specialty, {
        foreignKey: 'specialty_id',
        as: 'Specialty', 
      });

      Doctor_specialty.belongsTo(models.Doctors, {
        foreignKey: 'doctor_id',
        as: 'Doctor', 
      });

    }
  }
  Doctor_specialty.init({
    doctor_id: DataTypes.INTEGER,
    specialty_id: DataTypes.INTEGER,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Doctor_specialty',
  });
  return Doctor_specialty;
};