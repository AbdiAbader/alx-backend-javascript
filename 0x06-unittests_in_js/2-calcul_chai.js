function calculateNumber(type, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw TypeError('Parameters must be numbers')
    }
    if (isNaN(a) || isNaN(b)) {
      throw TypeError
      }
      if (a === undefined || b === undefined || type === undefined) {
          throw TypeError
      }
     
  
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b)
  }
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b)
    }   
    if (type === 'DIVIDE') {
        if (Math.round(b) === 0) {
            return 'Error'
        }
        return Math.round(a) / Math.round(b)
    }

}
module.exports = calculateNumber;