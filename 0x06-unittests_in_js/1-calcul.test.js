const assert = require('assert');
const calcul = require('./1-calcul');

describe('calcul', () => {
  it('should return incorrect input', () => {
   assert.throws(() => calcul('SUM','a', 1), {
        name: 'TypeError',
        message: 'Parameters must be numbers'

  }
   );
  }
    );
    it('should return correct result', () => {
        assert.strictEqual(calcul('SUM',1, 3), 4);
        assert.strictEqual(calcul('SUM',100, 3.7), 104);
        assert.strictEqual(calcul('SUM',1000, 3.7), 1004);
        assert.strictEqual(calcul('SUM',1.1, 3.7), 5);
        }
    );
    it('should return correct result', () => {
        assert.strictEqual(calcul('SUBTRACT',1, 3), -2);
        assert.strictEqual(calcul('SUBTRACT',100, 3.7), 96);
        assert.strictEqual(calcul('SUBTRACT',1000, 3.7), 996);
        assert.strictEqual(calcul('SUBTRACT',1.1, 3.7), -3);
        }
    );
    it('should return correct result', () => {
        assert.strictEqual(calcul('DIVIDE',1, 3), 0.3333333333333333);
        assert.strictEqual(calcul('DIVIDE',100, 3.7), 27.027027027027028);
        assert.strictEqual(calcul('DIVIDE',1000, 3.7), 270.27027027027026);
        assert.strictEqual(calcul('DIVIDE',1.1, 3.7), 0.2972972972972973);
        }
    );
    it('should throw a TypeError', () => {
        assert.throws(() => calcul(''), {
            name: 'TypeError'

        });
        }
    );
    it('should throw a TypeError', () => {
        assert.throws(() => calcul('DIVIDE',1, 0), {
            name: 'TypeError'

        });
        }
    );
}   
);
    