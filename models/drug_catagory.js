'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug_catagory extends Model {
    static associate(models) {
      
      Drug_catagory.hasMany(models.Drugs, {
        foreignKey: 'catagory_id',
        as: 'Category',
      });
    }
  }

  Drug_catagory.init(
    {
      catagory_name: DataTypes.STRING,
      isactive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Drug_catagory',
    }
  );

  return Drug_catagory;
};
