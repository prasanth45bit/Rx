'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Durations', [
      {
        duration_count:1,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:2,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:3,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:4,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:5,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:6,
        duration_type: 'Days',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:1,
        duration_type: 'Week',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:2,
        duration_type: 'Week',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:3,
        duration_type: 'Week',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:4,
        duration_type: 'Week',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:1,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:2,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:3,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:4,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:5,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        duration_count:6,
        duration_type: 'Month',
        isactive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Durations', null, {});
  }
};
