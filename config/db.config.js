// config/db.config.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shoe_inventory', 'root', '', {
    host: "34.128.65.67",
    dialect: 'mysql'
});

module.exports = sequelize;

/*const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shoe_inventory', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;*/

