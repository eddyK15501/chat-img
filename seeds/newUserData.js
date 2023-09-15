const { User } = require('../models');

const newUsers = [
  {
    username: 'test',
    email: 'test@gmail.com',
    password: 'test',
  },
  {
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'test',
  },
];

const seedUsers = () =>
  User.bulkCreate(newUsers, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
