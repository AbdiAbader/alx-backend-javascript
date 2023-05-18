const assert = require('assert');
const calcul = require('./0-calcul');

describe('calcul', () => {
  it('should return incorrect input', () => {
   assert.throws(() => calcul('a', 1), {
        name: 'TypeError',
        message: 'Parameters must be numbers'

  }
   );
  assert.throws(() => calcul(1, 'a'), {
        name: 'TypeError',
        message: 'Parameters must be numbers'
  
  });});
  it('should return correct result', () => {
   assert.strictEqual(calcul(1, 3), 4);
   assert.strictEqual(calcul(100, 3.7), 104);
    assert.strictEqual(calcul(1000, 3.7), 1004);
    assert.strictEqual(calcul(1.1, 3.7), 5);
  });

  it('should throw a TypeError', () => {
    assert.throws(() => calcul(''), {
        name: 'TypeError'

    });
    });
    });
    