'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doctor_languages', [
      {
        doctor_id: 1,
        language_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 1,
        language_id: 2,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 2,
        language_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 2,
        language_id: 3, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 3,
        language_id: 1,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 3,
        language_id: 4,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctor_languages', null, {});
  }
};

