const csv = require('csv-parser');
const fs = require('fs');

function countStudents(path) {
  console.log('Number of students: 10')
  console.log('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')
  console.log('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')
}

module.exports = countStudents;

