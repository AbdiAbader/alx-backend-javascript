const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n');
      const totalStudents = students.length - 2;

      console.log(`Number of students: ${totalStudents}`);

      const count = new Map();
      students.forEach((student) => {
        const fields = student.split(',');
        if (fields.length !== 4) {
          // Skip lines with incorrect number of fields
          return;
        }
        const field = fields[3].trim();
        if (!count.has(field)) {
          count.set(field, []);
        }
        count.get(field).push(`${fields[0]}`);
      });

      for (const [field, studentsList, firstname] of count.entries()) {
        if (field !== 'field') {
          console.log(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
