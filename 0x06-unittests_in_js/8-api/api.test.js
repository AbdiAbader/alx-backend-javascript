const request = require('supertest');
const app = require('./api');

describe('Index Page', () => {
  it('returns correct status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('returns correct result', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Welcome to the payment system');
  });
  it('returns incorrect result', async () => {
    const response = await request(app).get('/a');
    expect(response.status).toBe(404);
    });
});
    
