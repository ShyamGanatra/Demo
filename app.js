
var http  = require('http');

http.createServer(function(req,res){res.writeHead(200,{'content-Type' : 'text/plain'});res.end("hello khjy this is my own server");}).listen(3000);console.log("server is running on 3000");
