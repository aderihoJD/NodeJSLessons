var http = require('http');

http.createServer(function(req, res){
    console.log(req.rawHeaders);

    res.setHeader('Content-Type', 'text/plain');

    var ct = res.getHeader('Content-Type');

    console.log(ct);

    res.sendDate = false;

    console.log(res.headersSent);

    res.end('<h1>Test page</h1>');

    console.log(res.headersSent);

}).listen(8080);