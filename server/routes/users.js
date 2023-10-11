const express = require('express');

const router = express.Router();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Tebogo' },
];

/* GET users listing. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userExists = users.find((user) => user.id === Number(id));
  if (userExists) {
    return res.status(200).json(userExists);
  }
  return res.status(404).json({ message: 'User not found' });
});

module.exports = router;
