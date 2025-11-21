const request = require('supertest');
const app = require('../server'); // adjust import if needed

test('GET /api/bugs', async () => {
  const res = await request(app).get('/api/bugs');
  expect(res.statusCode).toBe(200);
});
