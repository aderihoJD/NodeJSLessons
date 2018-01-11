var MongoCLient = require('mongodb').MongoClient;
var persons = require('./persons');

var url = "mongodb://localhost:27017/ilyasTest";

MongoCLient.connect(url, function (err, database) {
   var myDB = database.db('ilyasTest');

   var collection = myDB.collection('users');

   collection.insertMany(persons, function (err, result) {
       if (err) throw err;

       console.log("Data added!");
       console.log("******Result*******");
       console.log(result);
       console.log("*******************");
       database.close();
   });

});
