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

// Eliminar un producto
xports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id); // Obtiene el ID del producto desde la URL
  const index = products.findIndex((product) => product.id === id); // Encuentra el índice del producto

  if (index === -1) {
    return res.status(404).json({ message: 'Producto no encontrado' }); // Devuelve un error si no existe
  }

  products.splice(index, 1); // Elimina el producto del array
  res.status(204).send(); // Responde con un código 204 (sin contenido) para confirmar
};


