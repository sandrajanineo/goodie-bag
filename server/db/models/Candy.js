const Sequelize = require('sequelize');
const db = require('../database');
const defaultImageUrl =
  'https://www.emoji.co.uk/files/emoji-one/food-drink-emoji-one/1648-candy.png';

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
    defaultValue: defaultImageUrl,
  },
});

module.exports = { Candy };
