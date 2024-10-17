'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rx_group_drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rx_group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rx_groups',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      drug_varient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drug_varients',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      catagory_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drug_catagories',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      duration: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      dose_m: {
        type: Sequelize.INTEGER
      },
      dose_an: {
        type: Sequelize.INTEGER
      },
      dose_n: {
        type: Sequelize.INTEGER
      },
      time_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Times',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      frequency_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Frequencies',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      when_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Whens',
          key: 'id',        
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      isactive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rx_group_drugs');
  }
};