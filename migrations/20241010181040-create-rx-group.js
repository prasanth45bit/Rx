'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rx_groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rx_group_name: {
        type: Sequelize.STRING
      },
        doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Doctors',
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
    await queryInterface.dropTable('Rx_groups');
  }
};