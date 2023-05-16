const http = require('http');

const file = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    } else if (req.url === '/students') {
        res.write('This is the list of our students\n');
        file(process.argv[2])
        .then((data) => {
            res.end(data);
        })
        .catch((err) => {
            res.end(err.message);
        });
    } else {
        res.end('Wrong path!');
    }
    }
);

app.listen(port);
module.exports = app;