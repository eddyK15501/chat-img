const { User } = require('../models');

const newUsers = [
  {
    username: 'carolinaBoy_501',
    email: 'fifteenBackwoods@gmail.com',
    password: 'qwer1234',
  },
];

const seedUsers = () => User.bulkCreate(newUsers);

module.exports = seedUsers;
