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

    var connection = new mssql.ConnectionPool(config);

    connection.connect(function(err){

        if (err){
            console.log(err);
            return;
        }

        var request = new mssql.Request(connection);
        request.query('SELECT * FROM TodoList', function (err, data) {
           if (err) {
               console.log(err);
               return;
           } else{
               var html = '';
               var allFields = data.recordset;

               for (var i = 0; i < allFields.length; i++){
                   html += '<h3>' + allFields[i].value + ' - ' + allFields[i].description + '</h3>'
               }

               res.send(html);

               connection.close();
           }

        });
    });
});

app.listen(port, function () {
   console.log('App listening on port: ' + port);
});