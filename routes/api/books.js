import { Router } from "express";
import cors from "cors";
const router = Router();
router.all("*", cors());

const Book = require("../../models/").Book;
const User = require("../../models/").User;

import passportAuthedUser from "../../utils/passportAuthedUser";

// GET All books
router.get("/", passportAuthedUser, async (req, res) => {
  return await Book.findAll({ where: { UserId: req.user.id } })
    .then(books => {
      if (books === 0) {
        return res.status(404).json({ errorMsg: "No books found" });
      }
      res.status(200).json(books);
    })
    .catch(error =>
      res.status(500).json({ errorMsg: `Finding books failed ${error}` })
    );
});

// GET One book by BookId
router.get("/:id", passportAuthedUser, async (req, res) => {
  return await Book.findOne({
    where: { UserId: req.user.id, id: req.params.id },
    include: [User]
  })
    .then(bookWithUser => {
      if (!bookWithUser) {
        return res.status(404).json({ errorMsg: "No book found" });
      }
      return res.status(200).json(bookWithUser);
    })
    .catch(error => {
      return res.status(500).json({ errorMsg: `Finding book failed ${error}` });
    });
});

// Create book
router.post("/", passportAuthedUser, async (req, res) => {
  // TODO VALIDATE DATA
  const { ...bookData } = req.body;
  return await Book.create({ ...bookData, UserId: req.user.id })
    .then(book =>
      Book.findOne({
        where: { UserId: req.user.id, id: book.id },
        include: [User]
      })
        .then(bookWithUser => {
          if (!bookWithUser) {
            return res.status(404).json({ errorMsg: "Book not found" });
          }
          return res.status(201).json(bookWithUser);
        })
        .catch(error => {
          return res
            .status(401)
            .json({ errorMsg: `Book not created ${error}` });
        })
    )
    .catch(error => {
      return res.status(500).json({ errorMsg: `Server error ${error}` });
    });
});

// Edit book
router.put("/:id", passportAuthedUser, async (req, res) => {
  // TODO VALIDATE DATA
  const { ...bookData } = req.body;
  return await Book.update(bookData, {
    returning: true,
    where: { UserId: req.user.id, id: req.params.id }
  })
    .then(() => {
      Book.findOne({ where: { id: req.params.id } }).then(updatedBook => {
        if (!updatedBook) {
          return res.status(404).json({ errorMsg: "No book found" });
        }
        return res.status(201).json(updatedBook);
      });
    })
    .catch(error => {
      return res.status(500).json({ errorMsg: `Book not updated ${error}` });
    });
});

// Delete Book
router.delete("/:id", passportAuthedUser, async (req, res) => {
  return await Book.destroy({
    where: { UserId: req.user.id, id: req.params.id }
  })
    .then(deleted => {
      if (deleted === 0) {
        return res.status(400).json({ errorMsg: "No book found" });
      }
      return res.status(200).json({ success: true });
    })
    .catch(error => {
      return res.status(500).json({ errorMsg: `Delete failed ${error}` });
    });
});

router.get("/checknotauth", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
