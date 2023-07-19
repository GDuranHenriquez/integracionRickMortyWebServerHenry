/* const axios = require('axios');

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
} */

const axios = require('axios');

const url = 'https://rickandmortyapi.com/api/character/';

function getCharById(req, res){
  const { id } = req.params;

  axios(`${url}${id}`).then(({data}) =>{
    if(data.error){
      return res.status(404).send(data.error);
    };
    
    const { id, name, status, species, origin, image, gender } = data;
    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin, // Enviamos el objecto "origin" porque el front lo espera
      image,
      gender,
    };

    return res.status(200).json(character);

  }).catch((error) => {
    // Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.
    return res.status(500).send(axiosError.message);
  });
};

module.exports = {
  getCharById,
};