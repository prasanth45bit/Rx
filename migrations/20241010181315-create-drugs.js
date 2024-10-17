'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drug_name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Drugs');
  }
};