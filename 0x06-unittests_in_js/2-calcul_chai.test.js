const {expect} = require('chai');
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
        expect(calcul('SUM', 1, 3)).to.equal(4);
        expect(calcul('SUM', 100, 3.7)).to.equal(104);
        expect(calcul('SUM', 1000, 3.7)).to.equal(1004);
        expect(calcul('SUM', 1.1, 3.7)).to.equal(5);
      });
  
      it('should return correct result', () => {
        expect(calcul('SUBTRACT', 1, 3)).to.equal(-2);
        expect(calcul('SUBTRACT', 100, 3.7)).to.equal(96);
        expect(calcul('SUBTRACT', 1000, 3.7)).to.equal(996);
        expect(calcul('SUBTRACT', 1.1, 3.7)).to.equal(-3);
      });
    
 
      it('should return correct result', () => {
        expect(calcul('DIVIDE', 5, 1)).to.equal(5);
        expect(calcul('DIVIDE', 100, 2)).to.equal(50);
        expect(calcul('DIVIDE', 1000, 10)).to.equal(100);
      });
      it('should return Error', () => {
        expect(calcul('DIVIDE', 1.1, 0)).to.equal('Error');
      });
    
      it('should throw a TypeError', () => {
        expect(() => calcul('')).to.throw(TypeError);
      });
     
}   
);
