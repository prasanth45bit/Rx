'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages', [
      {
        language: 'English',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: 'Spanish',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: 'French',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: 'German',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Languages', null, {});
  }
};
