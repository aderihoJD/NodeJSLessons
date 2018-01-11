var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/ilyasTest';

MongoClient.connect(url, function (err , database) {

    if (err) {
        console.log(err);
        return;
    }

    console.log('Connection established!');

    var myDB = database.db('ilyasTest');

    var collect = myDB.collection('users');

    var user = {firstName: "Ksusha", lastName: "Duboiskaya", age: 22};

    collect.insertOne(user, function (err, result) {

        if (err) {
           console.log(err);
           return;
       }

       console.log(result.ops);
       database.close();
    });

});