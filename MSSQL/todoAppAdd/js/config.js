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

var pool = connection.connect(function (err) {
   if (err) console.log(err);
});

module.exports = pool;