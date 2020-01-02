require('dotenv').config();
import passport from "passport";
import passportJWT from "passport-jwt";
import userModel from "./models/user.model.js";

let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.secret;
let strategy = new JWTStrategy(jwtOptions, async (payload, next) => {
  let user = await userModel.findOne({ username: payload });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

export default passport;