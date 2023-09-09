const { Post } = require('../models');

const newPosts = [
  {
    title: 'Get a 100% on this project',
    content:
      'Or consider asking administration for a partial refund. Or give up in life.',
    user_id: 1,
  },
];

const seedPosts = async () => await Post.bulkCreate(newPosts);

module.exports = seedPosts;
