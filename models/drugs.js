'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drugs extends Model {
    static associate(models) {
      Drugs.belongsTo(models.Drug_catagory, {
        foreignKey: 'catagory_id',
        as: 'Category', 
      });

      Drugs.hasMany(models.Drug_varient, {
        foreignKey: 'drug_id',
        as: 'drug', 
      });
    }
  }

  Drugs.init(
    {
      drug_name: DataTypes.STRING,
      catagory_id: DataTypes.INTEGER,
      isactive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Drugs',
    }
  );

  return Drugs;
};
