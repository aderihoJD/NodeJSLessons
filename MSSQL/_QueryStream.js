var express = require('express');
var app = express();

var port = 8080;

var mssql = require('mssql');

var config = {
    user: 'SA',
    password: 'Aderihoilya1903',
    server: 'localhost',
    database: 'ilyasTest',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

app.use(function (req, res) {

    mssql.connect(config, function (err) {
       var html = '';

       var request = new mssql.Request();

       request.stream = true;
       request.query('select * from TodoList');

       request.on('recordset', function (columns) {
          console.log(columns);
       });

       request.on('row', function (row) {
          html += '<h2>' + row.id + row.value + row.description + '</h2>';
       });

       request.on('error', function (err) {
          console.log(err);
       });

       request.on('done', function (affected) {
          res.send(html);
          console.log('Done!');
       });

    });


});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});


