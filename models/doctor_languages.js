  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Doctor_languages extends Model {
      static associate(models) {
        
        Doctor_languages.belongsTo(models.Languages, {
          foreignKey: 'language_id',
          as: 'Language', 
        });

        Doctor_languages.belongsTo(models.Doctors, {
          foreignKey: 'doctor_id',
          as: 'Doctor', 
        });
        
      }
    }
    Doctor_languages.init({
      doctor_id: DataTypes.INTEGER,
      language_id: DataTypes.INTEGER,
      isactive: DataTypes.BOOLEAN
    }, {
      sequelize,
      modelName: 'Doctor_languages',
    });
    return Doctor_languages;
  };