const { User } = require('../models');

const userData = [
  {
    username: 'kingKyle',
    email: 'kingkyle@email.com',
    password: 'password123'
  },
  {
    username: 'DinoDan',
    email: 'dinodan@email.com',
    password: 'dinodanisthebest7'
  },
  {
    username: 'CheekyCharlie',
    email: 'cheekycharlie87@email.com',
    password: 'coolguy345'
  },
  {
    username: 'MakoMike',
    email: 'makomike@email.com',
    password: 'sharkAttack91'
  },
  {
    username: 'SinisterSally',
    email: 'sinsistersally@email.com',
    password: 'sillysally34'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers