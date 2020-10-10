var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/js'));
server.get('/*', function(req,res){
  res.redirect("/")
})
server.listen(8080);