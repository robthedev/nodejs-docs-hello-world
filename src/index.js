// import "dotenv/config";
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const logger = require("morgan");

const apiRouter = require("./routes/api");
const auth = require("./routes/api/auth");
const books = require("./routes/api/books");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport setup
app.use(passport.initialize({}));
require("./config/passport")(passport);

app.use("/api/auth", auth);
app.use("/api/books", books);
app.use("/api", apiRouter);

//serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

export default app;