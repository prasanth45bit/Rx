'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doctors', [
      {
        doctor_name: 'Dr. John Doe',
        profile_photo: 'john_doe.jpg',
        qualification: 'MD, Cardiology',
        email: 'john.doe@example.com',
        password: 'password123',
        phone_number: 1234567890,
        address: '123 Elm Street, Springfield',
        service_since: new Date('2024-01-01'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_name: 'Dr. Jane Smith',
        profile_photo: 'jane_smith.jpg',
        qualification: 'MBBS, Dermatology',
        email: 'jane.smith@example.com',
        password: 'password123',
        phone_number: 1876543210,
        address: '456 Maple Avenue, Metropolis',
        service_since: new Date('2024-03-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctor_name: 'Dr. Emily Johnson',
        profile_photo: 'emily_johnson.jpg',
        qualification: 'MD, Pediatrics',
        email: 'emily.johnson@example.com',
        password: 'password123',
        phone_number: 1122334455,
        address: '789 Oak Drive, Gotham',
        service_since: new Date('2024-05-20'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
