const request = require('supertest');
const app = require('./api');

describe('Index Page TEst', () => {
    it('test GET /', (done) => {
        request(app)
        .get('/')
        .expect(200, 'Welcome to the payment system')
        .end((err, res) => {
            if (err) throw err;
            done();
        });
    });
    }
);

    
