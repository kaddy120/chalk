const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to user API' });
});

module.exports = router;
