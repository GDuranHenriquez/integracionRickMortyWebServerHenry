const http = require('http');
const { getCharById } = require('./controllers/getCharById');
/* const data = require('./utils/data'); */
const dotenv = require('dotenv');
dotenv.config();
const { PORT } = process.env;

//http://localhost:3001/rickandmorty/onsearch/id
http.createServer(function(req, res){
  res.setHeader('Access-Control-Allow-Origin', '*'); //Cors --> Le damos acceso a todos
  /* if(req.url.includes("/rickandmorty/character")){
    var id = req.url.split('/');
    id = id.pop();
    id = id.split(':')[1];
    const character = data.filter(element => element.id === parseInt(id));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(character));
    
  } */

  if(req.url.includes('onSearch')){
    let id = req.url.split('/');
    id = id.pop();
    //id = id.split(':')[1];
    return getCharById(res, id);
  };
}).listen(PORT, () => {
  console.log('Running on http://localhost:3001');
});