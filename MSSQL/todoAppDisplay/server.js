var express = require('express');
var app = express();

var port = 8080;

var path = require('path');
var bodyParser = require('body-parser');

var displayHandler = require('./js/displayHandler');

app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'pages')));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/', displayHandler.displayItems);

app.use(function (err, req, res, next) {
   if (err) console.log(err.stack);

   res.status(500).send('oops...something went wrong!');
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});




