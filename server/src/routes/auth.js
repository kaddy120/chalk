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
    failureRedirect: 'http://localhost:5000/login',
    successRedirect: 'http://localhost:5000',
    session: true,
  }),
  (req, res) => {
    // Successful authentication, redirect to the user's profile or dashboard
    req.login(req.user, (err) => {
      if (err) {
        // Handle login error
      }
      res.status(200).json({ message: 'User logged in' });
      // res.redirect('https://www.example.com/');
    });
  }
);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: 'http://localhost:5000',
  }),
  (req, res) => {
    console.log('User: ', req.user);
    res.send('Thank you for signing in!');
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
