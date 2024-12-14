const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// Rutas
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
