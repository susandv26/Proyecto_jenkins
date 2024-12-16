const request = require('supertest');
const app = require('../server'); // Importar la aplicación

describe('Pruebas de rutas de productos', () => {
  it('Debería devolver un array de productos', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Asegúrate de que responde con un array
  });

  it('Debería devolver un 404 para rutas desconocidas', async () => {
    const response = await request(app).get('/api/unknown');
    expect(response.status).toBe(404); // Asegúrate de que las rutas no definidas respondan con un error
  });
});

