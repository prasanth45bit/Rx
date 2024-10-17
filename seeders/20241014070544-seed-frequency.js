'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Frequencies', [
      {
        frequency: 'Daily',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequency: 'Alternative day',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequency: 'Weekly',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequency: 'Weekly twice',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequency: 'Weekly thrice',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        frequency: 'Monthly',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Frequencies', null, {});
  }
};
