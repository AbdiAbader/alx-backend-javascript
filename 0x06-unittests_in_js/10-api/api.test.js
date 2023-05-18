const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('API', () => {
  describe('Index Page', () => {
    it('returns correct status code and result', async () => {
      const response = await request(app).get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Welcome to the payment system');
    });
  });

  describe('Cart Page', () => {
    it('returns correct status code when :id is a number', async () => {
      const response = await request(app).get('/cart/123');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Payment methods for cart 123');
    });

    it('returns correct status code when :id is NOT a number', async () => {
      const response = await request(app).get('/cart/abc');
      expect(response.status).to.equal(404);
    });

    // Add more tests for other scenarios if needed
  });
});
describe('GET /available_payments', () => {
  it('should return an object with payment methods', async () => {
    const response = await request(app).get('/available_payments');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('POST /login', () => {
  it('should return a welcome message with the username', async () => {
    const response = await request(app).post('/login').send({ userName: 'John' });
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome John');
  });
});
