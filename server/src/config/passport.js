const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

function config(passport) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/github/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile.id);
        done(null, profile);
        // User.findOrCreate({ githubId: profile.id }, (err, user) =>
        //   done(err, user)
        // );
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
        cb(null, profile)
        // User.findOrCreate({ googleId: profile.id }, (err, user) =>
        //   cb(err, user)
        // );
      }
    )
  );
}

module.exports = config;
