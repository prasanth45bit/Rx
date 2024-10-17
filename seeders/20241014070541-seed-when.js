'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Whens', [
      {
        when: 'Before Meals',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        when: 'After Meals',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Whens', null, {});
  }
};

