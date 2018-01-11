var express = require('express');

var app = express();

var port = 8080;

app.use(function (req, res, next) {
   if (req.url == '/'){
       res.send('Hello');
   } else {
       next();
   }
});

app.use(function (req, res, next) {
   if (req.url == '/forbidden'){
       next(new Error('access denied!'));
   } else {
       next();
   }
});

app.use(function (req, res, next) {
   if (req.url == '/test'){
       res.send('Test');
   } else {
       next();
   }
});

app.use(function (req, res, next) {
    next(new Error('page not found!'));
});

app.use(function (err, req, res, next) {
   res.status(500).send('Oops..Something went wrong!');

   next(err.message);
});

app.listen(port);