const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// Rutas
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Exportar la aplicación para pruebas
module.exports = app;

// Iniciar el servidor solo si se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Se levantó en http://localhost:${PORT}`);
  });
}
