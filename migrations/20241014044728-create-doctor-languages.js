'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctor_languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Languages',
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
    await queryInterface.dropTable('Doctor_languages');
  }
};