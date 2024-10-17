'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Specialties', [
      {
        specialty: 'Cardiology',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty: 'Neurology',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty: 'Dermatology',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty: 'Pediatrics',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specialties', null, {});
  }
};
