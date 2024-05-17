//routes/shoeRoutes.js

const express = require('express');
const router = express.Router();
const shoeController = require('../controllers/shoeController');

router.get('/shoes', shoeController.getAllShoes);
router.post('/shoes', shoeController.createShoe);
router.put('/shoes/:id', shoeController.updateShoe); // Corrected route for updating a shoe
router.delete('/shoes/:id', shoeController.deleteShoe);
router.get('/shoes/:id', shoeController.getShoeById); // This route declaration is redundant, remove it
router.get('/shoes/search', shoeController.searchShoes);

module.exports = router;
