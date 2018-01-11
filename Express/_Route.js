var express = require('express');

var app = express();

app.get('/[a-zA-Z]*\.html$/', function (req, res) {
    res.send(req.url);
    res.end();
});

app.listen(8080);