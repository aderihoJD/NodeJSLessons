var express = require('express');
var path = require('path');

var app = express();

var catalog = 'data/012_example';

app.use('/', express.static(path.join(__dirname, catalog)));

// app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname, catalog, 'index.html'));
// });
//
// app.get('/test.js', function (req, res) {
//     res.sendFile(path.join(__dirname, catalog, 'test.js'));
// });

app.listen(8080);