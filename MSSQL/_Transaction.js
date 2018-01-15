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

var connection = new mssql.ConnectionPool(config);

app.get('/',function (req, res) {
    connection.connect(function (err) {
       var transaction = new mssql.Transaction(connection);

       transaction.begin(function (err) {
          var request = new mssql.Request(transaction);
          request.query("insert into TodoList (value, description) values ('have dinner', 'eat big cheeseburger')", function (err ,data) {
             if (err) {
                 console.log(err);
                 transaction.rollback(function (error) {
                    console.log('rollback successful!');
                 });
             } else {
                 transaction.commit(function (error, data) {
                     console.log('data commit success');
                     res.send('transaction successful!');
                 });
             }
          });
       });
    });
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});