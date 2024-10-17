'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rx_group_drug extends Model {
    static associate(models) {
      Rx_group_drug.belongsTo(models.Rx_group, { foreignKey: 'rx_group_id' });

      Rx_group_drug.belongsTo(models.Drug_varient, { foreignKey: 'drug_varient_id' });

      Rx_group_drug.belongsTo(models.Drug_catagory, { foreignKey: 'catagory_id' });

      Rx_group_drug.belongsTo(models.When, {
        foreignKey: 'when_id',
        as: 'When', 
      });

      Rx_group_drug.belongsTo(models.Duration, {
        foreignKey: 'duration_id',
        as: 'Duration', 
      });

      Rx_group_drug.belongsTo(models.Time, {
        foreignKey: 'time_id',
        as: 'Time', 
      });

      Rx_group_drug.belongsTo(models.Frequency, {
        foreignKey: 'frequency_id',
        as: 'Frequency', 
      });

    }
  }

  Rx_group_drug.init(
    {
      rx_group_id: DataTypes.INTEGER,
      drug_varient_id: DataTypes.INTEGER,
      catagory_id: DataTypes.INTEGER,
      duration_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      dose_m: DataTypes.INTEGER,
      dose_an: DataTypes.INTEGER,
      dose_n: DataTypes.INTEGER,
      time_id: DataTypes.INTEGER,
      frequency_id: DataTypes.INTEGER,
      when_id: DataTypes.INTEGER,
      isactive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Rx_group_drug',
    }
  );

  return Rx_group_drug;
};
