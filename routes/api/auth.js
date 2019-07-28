const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/checkauth",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    return await res.json({ success: true });
  }
);

router.get("/checknotauth", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
