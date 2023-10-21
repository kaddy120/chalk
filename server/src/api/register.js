const express = require('express');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  res.json({ message: 'Thanks for registering' });
});

module.exports = router;
