const Sequelize = require('sequelize');
const db = new Sequelize('postgres://elvyyang@localhost:5432/wikistack');

module.exports = {
  db
}