var express = require('express');
var path = require('path');

var app = express();

var port = 8080;

app.get('/', function(req, res){

    // res.cookie('someCookie', 'this is a cookie', {
    //    httpOnly: true,
    //    maxAge: 2000
    // });
    //
    // res.cookie('anotherCookie', 'this is another cookie');
    //
    // res.clearCookie('anotherCookie');
    //
    // res.sendFile(path.join(__dirname, 'data/007_index.html'));

    res.locals.prop1 = 'this is a response property!';
    console.log(res.locals.prop1);

    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Milliseconds warning');

    res.set('Cache-Control', 'no-cache');

    res.send('<h1>Sample response</h1>' + '<h3>' + res.locals.prop1 + '</h3>');

});


app.listen(port);
