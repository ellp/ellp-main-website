var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.route('/informaticabasica')
  .get(function(req, res) {
    res.sendFile(__dirname + '/informaticabasica.html');  
  });

app.route('/diadascriancas')
  .get(function(req, res) {
    res.sendFile(__dirname + '/diadascriancas.html');  
  });

app.route('/engenhariameninas')
  .get(function(req, res) {
    res.sendFile(__dirname + '/engenhariameninas.html');  
  });

app.route('/ensinomedio')
  .get(function(req, res) {
    res.sendFile(__dirname + '/ensinomedio.html');  
  });

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(port, function() {
  console.log("App is running on port: " + port);
});

