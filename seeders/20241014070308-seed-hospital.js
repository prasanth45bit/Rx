'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hospitals', [
      {
        hospital_name: 'Siva Hospital',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospital_name: 'Selva Valley Clinic',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospital_name: 'Dharanish Medical Center',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hospital_name: 'Prasanth General Hospital',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hospitals', null, {});
  }
};
