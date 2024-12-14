const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para los productos obtener, agregar y  elimminar
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
