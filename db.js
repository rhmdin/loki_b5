const { Sequelize } = require('sequelize');

const db = new Sequelize('loki', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

module.exports = db;