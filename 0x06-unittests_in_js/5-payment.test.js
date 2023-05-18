const {expect} = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call calculateNumber', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
     expect(sendPaymentRequestToApi(100, 20)).to.equal('The total is: 10');
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberStub.restore();
    });
    });
    it('should call calculateNumber 2', () => {
 const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  expect(sendPaymentRequestToApi(10, 10)).to.equal('The total is: 20');
  expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;   
  calculateNumberStub.restore();
}
);
