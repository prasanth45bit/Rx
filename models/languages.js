'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Languages extends Model {
    static associate(models) {
      Languages.hasMany(models.Doctor_languages, {
        foreignKey: 'language_id',
        as: 'Language',
      });
    }
  }
  Languages.init({
    language: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Languages',
  });
  return Languages;
};