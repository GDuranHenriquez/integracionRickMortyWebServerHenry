const axios = require('axios');

function getCharById(res, id){
  axios(`https://rickandmortyapi.com/api/character/${id}`).then((response) =>{
    const { data } =  response;
    const character = {
      id: id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status
    }
    res.writeHead(200, { 'Content-type': 'application/json' });
    return res.end(JSON.stringify(character));
  }).catch((error) => {
    //res.writeHead(404, {'Content-type': 'text/plain'});
    return res.end(error.message);
  });
};

module.exports = {
  getCharById,
}