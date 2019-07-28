const Book = require("../models/").Book;
const User = require("../models/").User;

module.exports = {
  // GET - Returning all books
  async list(req, res) {
    return await Book.findAll()
      .then(books => {
        if (books === 0) {
          return res.status(404).json({ errorMsg: `no books found ${error}` });
        }
        res.status(200).json(books);
      })
      .catch(error =>
        res.status(404).json({ errorMsg: `Finding books failed ${error}` })
      );
  },
  // GET - For locating book by the bookId
  async getById(req, res) {
    return await Book.findByPk(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(404).json({ errorMsg: "Book not found" });
        }
        return res.status(200).json(book);
      })
      .catch(error =>
        res.status(400).json({ errorMsg: `Error finding book ${error}` })
      );
  },
  // POST - For creating a book
  async create(req, res) {
    const {
      title,
      author,
      rating,
      coverImg,
      description,
      isbn,
      status
    } = req.body;
    return await Book.create({
      title,
      author,
      rating,
      coverImg,
      description,
      isbn,
      status
    })
      .then(book => res.status(201).json(book))
      .catch(error =>
        res.status(400).json({ errorMsg: `Book not created ${error}` })
      );
  },
  // PUT - Updating an existing book
  async update(req, res) {
    const {
      title,
      author,
      rating,
      coverImg,
      description,
      isbn,
      status
    } = req.body;
    return await Book.findByPk(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(404).json({ errorMsg: "No book to update" });
        }
        return book
          .update({
            title,
            author,
            rating,
            coverImg,
            description,
            isbn,
            status
          })
          .then(() => res.status(200).json(book))
          .catch(error =>
            res.status(400).json({ errorMsg: `Book not updated ${error}` })
          );
      })
      .catch(error =>
        res.status(400).json({ errorMsg: `Book not updated ${error}` })
      );
  },
  // Delete - Delete existing book
  async delete(req, res) {
    return await Book.findByPk(req.params.id)
      .then(book => {
        if (!book) {
          return res.status(404).json({ errorMsg: `No book to delete` });
        }
        return book
          .destroy()
          .then(() => res.status(200).json({ errorMsg: "Book was deleted" }))
          .catch(error =>
            res.status(400).json({ errorMsg: `Book was not deleted ${error}` })
          );
      })
      .catch(error =>
        res.status(500).json({ errorMsg: `Book delete failed ${error}` })
      );
  }
};
