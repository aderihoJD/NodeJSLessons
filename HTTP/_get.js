var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var port = 8080;

const server = http.createServer( function(req, res){
    req.on('error', function(err){
        console.log(err);
    });

    if (req.url == '/') {
        var file_path = path.join(__dirname, 'index1.html');
        fs.readFile(file_path, function(err, data){
           if (err){
               console.log(err);
               res.writeHead(404, {'Content-Type': 'text/plain'});
               res.write('Not found!');
           } else {
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.write(data.toString());
           }
           res.end();
        });
    } else if (req.url == '/request') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>Data from server!</h2>');
        res.end();

        console.log('Data sent');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Resource not found');
    }

}).listen(port);