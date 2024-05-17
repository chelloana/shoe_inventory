// controllers/userController.js
const User = require('../models/user');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        // Menggunakan bcrypt untuk menghasilkan hash password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 adalah jumlah putaran (rounds) untuk proses hash
        const newUser = await User.create({ username, password: hashedPassword, email }); // Simpan hash password ke database
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.destroy({ where: { id } });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;
    try {
        let user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user = await user.update({ username, password, email });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
