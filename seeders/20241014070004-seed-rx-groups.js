'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rx_groups', [
      {
        rx_group_name: 'Fever',
        doctor_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rx_group_name: 'Cold',
        doctor_id: 2, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rx_group_name: 'Corona',
        doctor_id: 3,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rx_group_name: 'Headache',
        doctor_id: 1,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rx_groups', null, {});
  }
};
