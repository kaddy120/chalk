const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: 'http://localhost:5000',
  }),
  (req, res) => {
    // Successful authentication, redirect to the user's profile or dashboard
    res.redirect('http://localhost:5000/');
  }
);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:5000/');
  }
);

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);
  });
  req.session.destroy((err) => {
    if (err) next(err);
  });
  res.redirect('http://localhost:5000/');
});

module.exports = router;
