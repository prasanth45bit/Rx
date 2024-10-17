'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Times', [
      {
        time: 'Immediately',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '5 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '10 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '15 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '20 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '30 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '40 min',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '1 hour',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Times', null, {});
  }
};
