'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drug_varients', [
      {
        drug_varient: 'Variant 500mg',
        duration: '1 week',
        quantity: 7,
        dose_m: 1,
        dose_an: 0,
        dose_n: 0,
        time_id: 1, // Assuming 1 exists in the Times table
        frequency_id: 1, // Assuming 1 exists in the Frequencies table
        when_id: 1, // Assuming 1 exists in the Whens table
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        drug_varient: 'Variant 250mg',
        duration: '2 weeks',
        quantity: 14,
        dose_m: 2,
        dose_an: 0,
        dose_n: 0,
        time_id: 1, // Assuming 1 exists in the Times table
        frequency_id: 2, // Assuming 2 exists in the Frequencies table
        when_id: 1, // Assuming 1 exists in the Whens table
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        drug_varient: 'Variant 125mg',
        duration: '5 days',
        quantity: 5,
        dose_m: 0,
        dose_an: 1,
        dose_n: 0,
        time_id: 1, // Assuming 1 exists in the Times table
        frequency_id: 1, // Assuming 1 exists in the Frequencies table
        when_id: 1, // Assuming 1 exists in the Whens table
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drug_varients', null, {});
  }
};
