const router = require('express').Router();
const { User, Post } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.status(200).render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/todolist');
    return;
  }
  res.render('signup');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/todolist');
    return;
  }
  res.render('login');
});

module.exports = router;
