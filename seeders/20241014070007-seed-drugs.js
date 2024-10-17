'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drugs', [
      {
        drug_name: 'Paracetamol',
        catagory_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        drug_name: 'Ibuprofen',
        catagory_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        drug_name: 'Cough Syrup',
        catagory_id: 2, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drugs', null, {});
  }
};
