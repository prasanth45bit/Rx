'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rx_group extends Model {
    static associate(models) {

      Rx_group.hasMany(models.Rx_group_drug, { foreignKey: 'rx_group_id' });

      Rx_group.belongsTo(models.Doctors, { foreignKey: 'doctor_id' });
    }
  }

  Rx_group.init(
    {
      rx_group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      isactive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Rx_group',
    }
  );

  return Rx_group;
};
