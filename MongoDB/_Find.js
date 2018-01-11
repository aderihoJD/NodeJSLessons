var MongoCLient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/ilyasTest";

MongoCLient.connect(url, function (err, database) {
   var myDB = database.db('ilyasTest');

   var collection = myDB.collection('users');

   var cursor = collection.find();

   cursor.toArray(function (mongoError, result) {
       console.log('******All Data******');
       console.log(result);
       console.log('********************');

       collection.find({name: "Sergey"}).toArray(function (mongoError2, result) {
          console.log('*******Employees with name Sergey******');
          console.log(result);
          console.log('***************************************');

          collection.findOne({age: {$lt : 30}}).then(function (value) {
              console.log('********Employee with age less than 30******');
              console.log(value);
              console.log('********************************************');

              database.close();
          });

       });

   });
});