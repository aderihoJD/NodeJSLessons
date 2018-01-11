var MongoCLient = require("mongodb").MongoClient;

var users = [{name: "Bob", age: 34}, {name: "Alice", age: 21}, {name: "Tom", age: 45}];

MongoCLient.connect("mongodb://localhost:27017/ilyasTest", function (err, database) {
   var myDB = database.db('ilyasTest');

   var collection = myDB.collection('users');

   collection.insertMany(users, function (err, results) {
      collection.findOneAndUpdate({age: 25}, {$set: {age: 9}}, {returnOriginal: false}, function (err, result) {
            console.log(result);
            database.close();
          }
      );
   });

});