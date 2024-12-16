const express = require('express');
const router = express.Router();

// Ejemplo de datos
const products = [
  { id: 1, name: 'Producto A', price: 100 },
  { id: 2, name: 'Producto B', price: 200 }
];

// Obtener todos los productos
router.get('/', (req, res) => {
  res.status(200).json(products);
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

module.exports = router;

