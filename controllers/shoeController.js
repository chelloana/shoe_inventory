//controllers/shoeController.js

const Shoe = require('../models/shoe');
const { Op } = require('sequelize');

exports.getAllShoes = async (req, res) => {
    try {
        const shoes = await Shoe.findAll();
        if (shoes.length === 0) {
            return res.status(404).json({ message: 'No shoes found' });
        }
        res.json(shoes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createShoe = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        const newShoe = await Shoe.create({ name, description, price, quantity });
        res.status(201).json(newShoe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getShoeById = async (req, res) => {
    const { id } = req.params;
    try {
        const shoe = await Shoe.findByPk(id);
        if (!shoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.json(shoe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteShoe = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedShoe = await Shoe.destroy({ where: { id } });
        if (!deletedShoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.json({ message: 'Shoe deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateShoe = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;
    try {
        let shoe = await Shoe.findByPk(id);
        if (!shoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        shoe = await shoe.update({ name, description, price, quantity });
        res.json(shoe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.searchShoes = async (req, res) => {
    const { query } = req.query;
    try {
        const shoes = await Shoe.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${query}%` } },
                    { description: { [Op.like]: `%${query}%` } }
                ]
            }
        });
        if (shoes.length === 0) {
            return res.status(404).json({ message: 'No shoes found' });
        }
        res.json(shoes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
