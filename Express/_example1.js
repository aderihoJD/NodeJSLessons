var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log(req.url);
    res.send('<h1>Hello, World!</h1>');
});

app.get('/about', function (req, res) {
    console.log(req.url);
    res.send('<h1>About page!</h1>');
});

app.get('/products', function (req, res) {
    console.log(req.url);
    res.send('<h1>Products page!</h1>');
});

app.listen(8080, function () {
   console.log('Server listening on port 8080');
});