import "dotenv/config";
import createHashedPassword from "../utils/createHashedPassword";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/").User;

module.exports = {
  async list(req, res) {
    return await User.findAll()
      .then(users => {
        if (users.length === 0) {
          throw new Error("No users found");
        }
        res.status(200).json(users);
      })
      .catch(error => res.status(404).json({ errorMsg: `${error}` }));
  },
  async signUp(req, res) {
    let { name, email, password } = req.body;
    if (!name || !password || !email) {
      res.status(400).json("required");
      throw new Error("All fields required");
    }
    password = createHashedPassword(password);
    return await User.findOrCreate({
      where: { email },
      defaults: { name, email, password }
    })
      .then(([user, created]) => {
        if (user.email === email && !created) {
          res.status(400).json({ errorMsg: "User already exists" });
        }
        res.status(201).json(user);
      })
      .catch(error =>
        res.status(400).json({ errorMsg: `Sign Up failed ${error}` })
      );
  },
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ errorMsg: "All fields required" });
    }
    return await User.findOne({ where: { email } })
      .then(user => {
        if (!user) {
          res.status(404).json({ errorMsg: "User not found" });
        }
        // TODO - MOVE PASSWORD COMPARE TO UTILS
        bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              const userData = {
                id: user.id,
                name: user.name,
                email: user.email
              };
              // TODO - SETUP ENV KEYS
              jwt.sign(
                userData,
                process.env.MY_TEST_SECRET,
                { expiresIn: 6048000 },
                (error, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: userData
                  });
                }
              );
            } else {
              return res.status(400).json("Passwords are not a match");
            }
          })
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error =>
        res.status(500).json({ errorMsg: `Sign in failed ${error}` })
      );
  }
};
