const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');
const databaseFilePath = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n\n');

    countStudents(databaseFilePath)

        .then(() => {
          const data = fs.readFileSync(databaseFilePath, 'utf8');
          const students = data.split('\n');
          const totalStudents = students.length - 2;
          const studentsListCS = [];
          const studentsListSWE = [];
      
          students.forEach((student) => {
            const fields = student.split(',');
            if (fields.length === 4) {
              const field = fields[3].trim();
              if (field === 'CS') {
                studentsListCS.push(fields[0]);
              } else if (field === 'SWE') {
                studentsListSWE.push(fields[0]);
              }
            }
          });
          res.write(`Number of students: ${totalStudents}\n`);
          res.write(`Number of students in CS: ${studentsListCS.length}. List: ${studentsListCS.join(', ')}\n`);
          res.write(`Number of students in SWE: ${studentsListSWE.length}. List: ${studentsListSWE.join(', ')}\n`);
          res.end();
        })
        .catch((error) => {
          res.end(error.message);
        });
      
    
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1246, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
