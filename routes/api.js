import { Router } from "express";
import cors from "cors";
const router = Router();

import bookController from "../controllers/book";
import userController from "../controllers/user";
router.use(cors());
//router.options('*', cors());
// Book controller
router.get("/books", bookController.list);
router.get("/books/:id", bookController.getById);
router.post("/books", bookController.create);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.delete);

// User controller
router.get("/users", userController.list);
router.post("/signup", userController.signUp);
router.post("/login", userController.login);

module.exports = router;
