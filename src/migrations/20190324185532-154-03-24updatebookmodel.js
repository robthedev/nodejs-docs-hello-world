'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.addColumn(
                  'books',
                  'coverImg',
                  {
                      type: Sequelize.STRING,
                      allowNull: true
                  }, { transaction: t }),
              queryInterface.addColumn(
                  'books',
                  'description',
                  {
                      type: Sequelize.STRING,
                      allowNull: true
                  }, { transaction: t }),
              queryInterface.addColumn(
                  'books',
                  'isbn',
                  {
                      type: Sequelize.STRING,
                      allowNull: true
                  }, { transaction: t }),
              queryInterface.addColumn(
                  'books',
                  'status',
                  {
                      type: Sequelize.ENUM('Not started', 'Currently reading', 'Finished'),
                      allowNull: false
                  }, { transaction: t })
          ])
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('books', 'coverImg', { transaction: t }),
              queryInterface.removeColumn('books', 'description', { transaction: t }),
              queryInterface.removeColumn('books', 'isbn', { transaction: t }),
              queryInterface.removeColumn('books', 'status', { transaction: t })
          ])
      })
  }
};
