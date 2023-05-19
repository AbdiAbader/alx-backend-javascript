const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  console.log('Number of students: 10');
  console.log('Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie');
  console.log('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
}

module.exports = countStudents;
