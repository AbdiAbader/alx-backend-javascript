function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('Parameters must be numbers')
  }
  if (isNaN(a) || isNaN(b)) {
    throw TypeError
    }
    if (a === undefined || b === undefined) {
        throw TypeError
    }
    return Math.round(a) + Math.round(b)
}
module.exports = calculateNumber;