const http = require('http');

const route = http.createServer((req, res) => {
    res.end('Hello Holberton School!');
    }
    );
route.listen(1245);
module.exports = route;
