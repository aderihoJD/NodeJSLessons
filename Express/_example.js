var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');

var app = express();
var port = 8080;

app.use(express.static('data/013_example'));

app.use(bodyParser.urlencoded({extended: true}));

app.route('/')
        .all(function (req, res) {
           console.log('request to main page!');//почему не логает в консоль?
           res.writeHead(301, {'Location': 'index.html'});
           res.end();
        });

app.route('/test')
        .get(function (req, res) {
           var data = url.parse(req.url, true).query;
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(data.text);
        })
        .post(function (req, res) {
        var data = req.body.text;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })

app.listen(port);