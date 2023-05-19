const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');
const databaseFilePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(databaseFilePath)
      .then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245: 127.0.0.1');
});

module.exports = app;
