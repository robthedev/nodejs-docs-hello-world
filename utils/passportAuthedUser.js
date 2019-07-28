import passport from "passport";

const passportAuthUser = passport.authenticate("jwt", { session: false });

export default passportAuthUser;
