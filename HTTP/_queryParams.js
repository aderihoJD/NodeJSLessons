var http = require('http');
var url = require('url');

// http.createServer(function(req, res){
//    var query = url.parse(req.url, true).query;
//    res.end('GET params: ' + JSON.stringify(query));
// }).listen(8080);

var server = http.createServer();

server.on('request', function (req, res) {
   var method = req.method;
   var _url = req.url;

   console.log('Method: ', method, '; URL:', _url);

   var parsed = url.parse(req.url, true);

   console.log(parsed);

   if (parsed.pathname == '/test' && parsed.query.message) {
       res.statusCode = 200;

       res.end(parsed.query.message);
   } else {
       res.statusCode = 404;
       res.end('Page not found on server!');
   }
});

server.listen(8080);

