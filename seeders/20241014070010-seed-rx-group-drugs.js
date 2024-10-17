'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rx_group_drugs', [
      {
        rx_group_id: 1,
        drug_varient_id: 1,
        catagory_id: 1,
        duration_id: 11,
        quantity: 7,
        dose_m: 1,
        dose_an: 0,
        dose_n: 0,
        time_id: 1,
        frequency_id: 1,
        when_id: 1,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rx_group_id: 1,
        drug_varient_id: 2,
        catagory_id: 1,
        duration_id: 8,
        quantity: 14,
        dose_m: 2,
        dose_an: 0,
        dose_n: 0,
        time_id: 1,
        frequency_id: 2,
        when_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rx_group_drugs', null, {});
  }
};

