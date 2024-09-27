const path = require('path'); //get path ผ่าน server
const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'mvc_demo.sqlite') //get path
});