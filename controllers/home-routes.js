const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.status(200).render('homepage');
});

module.exports = router;
