const express = require('express');

const router = express.Router();
const employees = [
  { firstName: 'Jane', lastName: 'Smith', age: 20 },
  { firstName: 'John', lastName: 'Smith', age: 30 },
  { firstName: 'Mary', lastName: 'Green', age: 50 },
];

/* GET home page. */
router.get('/', (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];
  if (firstName) {
    results = results.filter((employee) => employee.firstName === firstName);
  }

  if (lastName) {
    results = results.filter((employee) => employee.lastName === lastName);
  }

  if (age) {
    results = results.filter((employee) => employee.age === Number(age));
  }
  res.json(results);
});

module.exports = router;
