const express = require('express');
const passport = require('passport');

const router = express.Router();

const successLoginUrl = 'http://localhost:5000';
const errorLoginUrl = 'http://localhost:5000/login/error';

router.get(
  '/login/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureMessage: 'Cannot login to Github, please try again later!',
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
    session: true,
  }),
  (req, res) => {
    // Successful authentication, redirect to the user's profile or dashboard
    req.login(req.user, (err) => {
      if (err) {
        // Handle login error
      }
      res.status(200).json({ message: 'User logged in' });
    });
  }
);

module.exports = router;
