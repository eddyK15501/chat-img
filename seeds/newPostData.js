const { Post } = require('../models');

const newPosts = [
  {
    title: 'Get a 100% on this project',
    content:
      'Or consider asking administration for a partial refund. Or give up on life.',
    user_id: 1,
  },
  {
    title: 'Finish the README.md',
    content: 'Make sure to give it a header and description.',
    user_id: 1,
  },
  {
    title: 'Create a Powerpoint',
    content: 'For project 2 presentation.',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(newPosts);

module.exports = seedPosts;
