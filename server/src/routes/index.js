const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(' session:', req.session)
  res.json({ message: 'Welcome', user: req.user });
});

module.exports = router;
