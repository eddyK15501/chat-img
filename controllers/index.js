const router = require('express').Router();
const homeRoutes = require('./home-routes');
const todoListRoutes = require('./todolist-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/todolist', todoListRoutes);
router.use('/api', apiRoutes);

module.exports = router;
