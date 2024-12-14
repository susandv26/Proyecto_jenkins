const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para los productos
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

module.exports = router;
