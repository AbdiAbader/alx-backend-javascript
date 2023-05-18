const { expect } = require('chai');
const calcul = require('./0-calcul');

describe('calcul', () => {
  it('should return incorrect input', () => {
    expect(() => calcul('')).to.throw();
  });

  it('should return correct result', () => {
    expect(calcul(1, 1)).to.equal(2);
  });

  it('should throw a TypeError', () => {
    expect(() => calcul('a', 1)).to.throw(TypeError, 'Parameters must be numbers');
  });
});