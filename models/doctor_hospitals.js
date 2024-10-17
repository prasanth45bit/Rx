'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_hospitals extends Model {
    static associate(models) {
      
    

      Doctor_hospitals.belongsTo(models.Doctors, {
        foreignKey: 'doctor_id',
        as: 'doctor_hospital', 
      });


        // Doctor_hospitals.belongsTo(models.Hospitals, {
      //   foreignKey: 'hospital_id',
      //   as: 'Hospital', 
      // });

    }
  }
  Doctor_hospitals.init({
    doctor_id: DataTypes.INTEGER,
    hospital_id: DataTypes.INTEGER,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Doctor_hospitals',
  });
  return Doctor_hospitals;
};