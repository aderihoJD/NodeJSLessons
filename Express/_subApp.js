var express = require('express');
var port = 8080;

var app = express();
var admin = express();
var user = express();

app.get('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write('<a href="/admin">admin page</a>');
   res.write('<br/>');
   res.write('<a href="/user">user page</a>');
   res.end();
});

admin.get('/', function (req, res) {
   console.log(admin.mountpath); //текущий путь маршрутизации
    res.send('Admin PAGE!');
});

admin.on('mount', function () {
   console.log('admin mounted!'); //событие mount - привязка дочернего приложения к родительскому
});

user.get('/', function (req, res) {
    console.log(user.mountpath); //текущий путь маршрутизации
    res.send('User HOMEPAGE!');
});

user.on('mount', function () {
    console.log('user mounted!'); //событие mount - привязка дочернего приложения к родительскому
});

app.use('/admin', admin);
app.use('/user', user);

app.listen(port, function () {
    console.log('App running on port: ' + port);
});