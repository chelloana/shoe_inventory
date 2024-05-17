// models/shoe.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Shoe = sequelize.define('shoe', { // Ubah 'Shoe' menjadi 'shoe'
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Shoe;