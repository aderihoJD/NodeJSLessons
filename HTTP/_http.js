var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World!");
    res.end();
}).listen(8080, function(){
    console.log('Server running on port 8080!');
});

