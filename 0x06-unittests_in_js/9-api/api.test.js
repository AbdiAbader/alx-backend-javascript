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
