var http = require('http');

var server = http.createServer(function(req, res){

    switch(req.method){
        case 'GET': {
            var answer = 'GET request ro path ' + req.url;
            console.log(answer);
            res.end(answer);
            break;
        }
        case 'POST': {
            var answer = 'POST request ro path ' + req.url;
            console.log(answer);
            res.end(answer);
            break;
        }
    }

}).listen(8080);