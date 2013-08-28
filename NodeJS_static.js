var express = require('express');
var server = express();
var port = 8080;

server.configure(function(){
  server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/public'));
});

server.listen(port);
console.log('Listening on port ' + port);