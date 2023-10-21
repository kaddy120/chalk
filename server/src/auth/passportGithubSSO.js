const GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport');
const { User } = require('../db/repository');

const GITHUB_CALLBACK_URL = 'http://localhost:3000/api/v1/auth/github/callback';

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      done(null, {
        githubId: profile.id,
        fullname: profile.displayName,
        username: profile.username,
        location: profile._json.location,
        phone: profile._json.phone,
        email: profile._json.email,
        profilePhoto: profile._json.avatar_url,
      });
      // const { users } = await User();
      // users.findOne({ githubId: profile.id }).then((data) => {
      //   if (!data) {
      //     return users
      // .insertOne({
      //   githubId: profile.id,
      //   fullname: profile.displayName,
      //   username: profile.username,
      //   location: profile._json.location,
      //   phone: profile._json.phone,
      //   email: profile._json.email,
      //   profilePhoto: profile._json.avatar_url,
      // })
      //       .then((result) => done(null, result));
      //   }
      //   return done(null, data);
      // });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
