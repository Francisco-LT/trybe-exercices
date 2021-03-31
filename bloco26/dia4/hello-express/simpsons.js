// simpsons.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

router.get('/bart', function (req, res) {
  res.send('Hello Bart!');
});

module.exports = router;