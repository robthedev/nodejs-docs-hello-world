'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [{
        title: 'Test book title',
        author: 'Test McTestface',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};
