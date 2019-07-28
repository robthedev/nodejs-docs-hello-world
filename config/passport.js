import passportJWT from "passport-jwt";
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
import keys from "./keys";

const User = require("../models/").User;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = keys.secretOrKey;

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  User.findOne({
    where: { id: jwt_payload.id }
  })
    .then(user => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(error => console.log(error));
});

module.exports = passport => {
  passport.use(strategy);
};
