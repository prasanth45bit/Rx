const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Frequency extends Model {
        static associate(models) {
            Frequency.hasMany(models.Drug_varient, {
                foreignKey: 'frequency_id',
                as: 'DrugVariants', // Ensure the association name does not collide
            });

            Frequency.hasMany(models.Rx_group_drug, {
                foreignKey: 'frequency_id',
                as: 'RxGroupDrugs', // Ensure the association name does not collide
            });
        }
    }
    Frequency.init({
        frequency: DataTypes.STRING,
        isactive: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Frequency',
    });
    return Frequency;
};
