'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug_varient extends Model {
    static associate(models) {
      Drug_varient.belongsTo(models.Drugs, {
        foreignKey: 'drug_id',
        as: 'Drug',
      });

      Drug_varient.belongsTo(models.When, {
        foreignKey: 'when_id',
        as: 'When',
      });

      Drug_varient.belongsTo(models.Time, {
        foreignKey: 'time_id',
        as: 'Time',
      });

      Drug_varient.belongsTo(models.Frequency, {
        foreignKey: 'frequency_id',
        as: 'Frequency',
      });

      Drug_varient.hasMany(models.Rx_group_drug, {
        foreignKey: 'drug_varient_id',
        as: 'Drug_Varient_id',
      });
    }
  }

  Drug_varient.init(
    {
      drug_varient: DataTypes.STRING,
      duration: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      dose_m: DataTypes.INTEGER,
      dose_an: DataTypes.INTEGER,
      dose_n: DataTypes.INTEGER,
      time_id: DataTypes.STRING,
      frequency_id: DataTypes.STRING,
      when_id: DataTypes.STRING,
      isactive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Drug_varient',
    }
  );

  return Drug_varient;
};
