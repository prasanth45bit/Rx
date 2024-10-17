'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    static associate(models) {
      // Ensure these models are correctly defined
      Doctors.hasMany(models.Rx_group, { foreignKey: 'doctor_id', as:'doctor' });
      Doctors.hasMany(models.Doctor_languages, { foreignKey: 'doctor_id', as:'doctor_language' });
      Doctors.hasMany(models.Doctor_specialty, { foreignKey: 'doctor_id', as:'doctor_specialty' });
      Doctors.hasMany(models.Doctor_hospitals, { foreignKey: 'doctor_id', as:'doctor_hospital' });
    }
  }
  
  Doctors.init({
    doctor_name: DataTypes.STRING,
    profile_photo: DataTypes.STRING,
    qualification: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    service_since: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  
  return Doctors;
};