var MongoCLient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/ilyasTest";

MongoCLient.connect(url, function (err, database) {
    var myDB = database.db('ilyasTest');

    var collection = myDB.collection('users');

    collection.find().toArray(function (mongoError, result) {
        console.log(result)
    });

    // collection.deleteOne({name: "Sergey", age: 37}, function (err, result) {
    //     console.log(result);
    //
    //     collection.find().toArray(function (mongoError, result) {
    //         console.log(result);
    //         database.close();
    //     });
    // });

    collection.deleteMany({firstName: "Ksusha"}, function (err, result) {
        console.log(result);
    });

    collection.find().toArray(function (mongoError, result) {
        console.log(result);
        database.close();
    });

});