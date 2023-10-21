const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const User = require("../models/user");

const GOOGLE_CALLBACK_URL = 'http://localhost:3000/api/v1/auth/google/callback';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      cb(null, profile);
      // const defaultUser = {
      //   fullName: `${profile.name.givenName} ${profile.name.familyName}`,
      //   email: profile.emails[0].value,
      //   picture: profile.photos[0].value,
      //   googleId: profile.id,
      // };
      //
      // const user = await User.findOrCreate({
      //   where: { googleId: profile.id },
      //   defaults: defaultUser,
      // }).catch((err) => {
      //   console.log("Error signing up", err);
      //   cb(err, null);
      // });
      //
      // if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log('Serializing user:', user);
  // cb(null, user.id);
  cb(null, user);
});

passport.deserializeUser(async (obj, cb) => {
  console.log('DeSerialized user', obj);
  cb(null, obj);
  // const user = await User.findOne({ where: { id } }).catch((err) => {
  //   console.log("Error deserializing", err);
  //   cb(err, null);
  // });
  //
  // console.log("DeSerialized user", user);
  //
  // if (user) cb(null, user);
});
