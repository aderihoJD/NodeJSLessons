var express = require('express');

var app = express();

var cookieParser = {
    getCookie: function (req, res, next){
        var cookies = req.get('Cookie');

        var cookieCollection = cookies.split(';');

        var tempCookies = {};

        for (var i = 0; i < cookieCollection.length; i++){
            var elem = cookieCollection[i];
            var pos = elem.indexOf('=');
            var key, value;

            if (pos != -1){
                key = elem.substring(0, pos);
                value = elem.substring(pos + 1);
            }

            tempCookies[key] = decodeURIComponent(value);
        }
        req.cookie = tempCookies;

        next();
    }
}

app.use('/', cookieParser.getCookie);

app.get('/', function (req, res) {
   console.log(req.cookie);
});

app.get('/index', function (req, res) {
   console.log('Main handler');
   res.cookie('someCookie', 'this is some cookie!');
   res.cookie('anotherCookie', 'this is another cookie!');
   res.end();
});

app.listen(8080);