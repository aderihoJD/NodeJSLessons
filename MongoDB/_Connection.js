var MongoCLient = require('mongodb').MongoClient;

var format = require('util').format;

var url = 'mongodb://localhost:27017/ilyasTest';

MongoCLient.connect(url, function (err, db) {
   if (err) throw err;

   console.log('Connection established!');

   db.close();
});

