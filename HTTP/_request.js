var http = require('http');
var utils = require('util');

http.createServer(function(req, res){
   var requestInfo = utils.format('HTTPVersion: %s \nMethod: %s \nStatus code: %s \nMessage: %s \nURL: %s',
       req.httpVersion,
       req.method,
       req.statusCode,
       req.statusMessage,
       req.url);

   console.log(requestInfo);

   for (var key in req.headers){
       console.log(key, ":", req.headers[key]);
   }

   res.end();
}).listen(8080, 'localhost');