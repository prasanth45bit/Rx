'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doctor_hospitals', [
      {
        doctor_id: 1,
        hospital_id: 1,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 1,
        hospital_id: 2, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 2,
        hospital_id: 3, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 2,
        hospital_id: 4, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 3,
        hospital_id: 1, 
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_id: 3,
        hospital_id: 3,
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctor_hospitals', null, {});
  }
};
