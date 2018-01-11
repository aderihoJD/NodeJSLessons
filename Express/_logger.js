var express = require('express');
var fs = require('fs');

var app = express();

var path = 'logger.txt';

app.use(function(req, res){
    var data = 'Address: ' + req.ip + '; Time: ' + new Date().toLocaleString() + '; URL: ' + req.url;

    fs.appendFile(path, data, function (err) {
       console.log('data wrote!');
    });
});

app.get('/', function(req, res){
   console.log('Main handler!');
   res.end();
});

app.listen(8080);