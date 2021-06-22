var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<h1>hello</h1>');
}).listen(80);