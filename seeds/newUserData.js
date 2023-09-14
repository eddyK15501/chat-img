const { User } = require('../models');

const newUsers = [
  {
    username: 'test',
    email: 'test@gmail.com',
    password: 'test'
  },
  {
    username: 'test2',
    email: 'test2gmail.com',
    password: 'test'
  },
];

const seedUsers = () => User.bulkCreate(newUsers);

module.exports = seedUsers;
