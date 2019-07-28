// import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import logger from "morgan";

import apiRouter from "./routes/api";
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
    app.use(express.static("./client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
    });
}

const port = process.env.PORT || 6520;

app.listen(port, () => {
    console.log(
        `app listening on ${process.env.PORT ? process.env.PORT : port} ${process.env ? process.env : 'NO'}!`
    );
});
