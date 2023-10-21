const express = require('express');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  res.json({ message: 'Welcome Back!', token: 'jwtToken' });
});

module.exports = router;
