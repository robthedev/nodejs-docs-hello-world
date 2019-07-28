'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Please enter a name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      comment: 'Please enter an email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Please enter a password'
    }
  }, {
      getterMethods: {
        getUserId() {
          return this.id;
        }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Book, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return User;
};