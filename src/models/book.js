"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Please enter the title for your book"
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Please enter the author for your book"
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Please add a rating"
      },
      coverImg: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Please upload book image"
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Please add a description"
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Please select an isbn"
      },
      status: {
        type: DataTypes.ENUM("Not started", "Currently reading", "Finished"),
        allowNull: false
      }
    },
    {}
  );
  Book.associate = function(models) {
    Book.belongsTo(models.User);
  };
  return Book;
};
