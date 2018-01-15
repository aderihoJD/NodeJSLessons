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


app.use(function (req ,res) {
   var connection = new mssql.ConnectionPool(config);

   connection.connect(function (err) {
       var ps = new mssql.PreparedStatement(connection); //конструктор дял формирования запросов к БД

       ps.input('param', mssql.Int);

       ps.prepare('select * from TodoList where id=@param', function (error) {
           if (err) console.log(err);
           ps.execute({param: 2}, function (err ,data) {
              if (err) console.log(err);
              res.send(data.recordset);
              console.log('prepared statament executed');
           });
       });
   });

});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});