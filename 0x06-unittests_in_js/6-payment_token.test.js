const {expect} = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { describe } = require('mocha');

describe('getPaymentTokenFromAPI', () => {
    it('test success arg', (done) => {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res).to.eql({data: 'Successful response from the API'});
                done();
            })
            .catch((err) => {
                done(err);
            });
    }
    );
});
