'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drug_catagories', [
      {
        catagory_name: 'Tablet',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        catagory_name: 'Syrub',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drug_catagories', null, {});
  }
};
