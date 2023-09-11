const { Post } = require('../models');

const newPost = [
    {
        title: 'Get a 100% on this project',
        content: 'Or consider asking administration for a partial refund. Or give up on life.',
        user_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(newPosts);

module.exports = seedPosts;
