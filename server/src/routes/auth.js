const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: 'http://localhost:5000',
  }),
  (req, res) => {
    // Successful authentication, redirect to the user's profile or dashboard
    res.redirect('/');
  }
);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;
