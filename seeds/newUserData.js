const { User } = require('../models');

const newUsers = [
  {
    id: 1,
    username: 'test',
    email: 'test@gmail.com',
    password: 'test',
  },
  {
    id: 2,
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
