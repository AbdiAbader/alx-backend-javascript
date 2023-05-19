const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');
const databaseFilePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n\n');

    countStudents(databaseFilePath)
      .then((data) => {
        res.write(data);
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

app.listen(1245, () => {
  console.log('Server listening on port 1245: 127.0.0.1');
});

module.exports = app;
