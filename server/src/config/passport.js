const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const { User } = require('../db/repository');

function config(passport) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/github/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const { users } = await User();
        users.findOne({ githubId: profile.id }).then((data) => {
          if (!data) {
            return users
              .insertOne({
                githubId: profile.id,
                fullname: profile.displayName,
                username: profile.username,
                location: profile._json.location,
                phone: profile._json.phone,
                email: profile._json.email,
                profilePhoto: profile._json.avatar_url,
              })
              .then((result) => done(null, result));
          }
          return done(null, data);
        });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/google/callback',
      },
      (accessToken, refreshToken, profile, cb) => {
        cb(null, profile);
        // User.findOrCreate({ googleId: profile.id }, (err, user) =>
        //   cb(err, user)
        // );
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
}

module.exports = config;
