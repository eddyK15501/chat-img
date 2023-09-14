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
  {
    title: 'Financial Tasks',
    content: 'Update the monthly budget spreadsheet with recent expenses.',
    user_id: 2,
  },
  {
    title: 'Email Follow-up',
    content: 'Send a follow-up email to the client.',
    user_id: 2,
  },
  {
    title: 'Cleaning',
    content: 'Dedicate 30 minutes to organize garage.',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(newPosts);

module.exports = seedPosts;
