var express = require('express');

var app = express();

app.get('/category/:catId', function (req, res) {
   console.log(req.params);
   res.end();
});

app.get('/category/:catId/product/:prodId', function (req, res) {
   console.log('category: ' + req.params['catId']);
   console.log('product: ' + req.params['prodId']);
   res.end();
});

app.listen(8080);