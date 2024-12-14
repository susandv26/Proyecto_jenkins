const products = []; // Almacenamiento temporal en memoria

// Obtener todos los productos
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// Crear un nuevo producto
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Nombre y precio son obligatorios' });
  }
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
