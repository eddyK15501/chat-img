const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const data = dbPostData.map((post) => {
      return post.get({ plain: true });
    });

    res.render('todolist', { data, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/:id', async (req, res) => {
//   try {

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/new', (req, res) => {
  res.render('new-todolist', { loggedIn: req.session.loggedIn });
});

module.exports = router;
