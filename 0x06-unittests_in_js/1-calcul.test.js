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
        assert.strictEqual(calcul('DIVIDE',5, 1), 5);
        assert.strictEqual(calcul('DIVIDE',100, 2), 50);
        assert.strictEqual(calcul('DIVIDE',1000, 10), 100);
        
        }
    );
    it('should return Errror', () => {
        assert.strictEqual(calcul('DIVIDE',1.1, 0), 'Error');
        }
    );
    it('should throw a TypeError', () => {
        assert.throws(() => calcul(''), {
            name: 'TypeError'
    
        });
        }
    );
}   
);
