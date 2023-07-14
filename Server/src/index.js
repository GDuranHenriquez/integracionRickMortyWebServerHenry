http = require('http');
data = require('./utils/data');

const PORT = 3001;
http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.url.includes("/rickandmorty/character")){
    var id = req.url.split('/');
    id = id.pop();
    id = id.split(':')[1];
    const character = data.filter(element => element.id === parseInt(id));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(character));
    
  }

}).listen(PORT, 'localhost')