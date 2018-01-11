var express = require('express');
var app = express();

var router = express.Router();

router.route('/')
            .get(function(req, res){
                res.send("List of products. GET Method!");
            })
            .post(function(req, res){
                res.send("Product created. POST Method!");
            });

router.route('/:id')
            .get(function(req, res){
                res.send('Product with id: ' + req.params.id);
            });

app.use('/products', router);

app.get('/', function(req, res){
    res.send("Main Page!");
});

app.listen(8080);