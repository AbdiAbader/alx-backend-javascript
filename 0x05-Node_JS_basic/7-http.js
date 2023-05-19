const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');
const databaseFilePath = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(databaseFilePath)
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
