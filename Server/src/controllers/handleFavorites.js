var myFavorites = [];

function postFav(req, res){
  var pj = req.body;
  myFavorites.push(pj);
  return res.status(200).json(myFavorites);
};

function deleteFav(req, res){
  myFavorites = myFavorites.filter(fav => fav.id !== Number(req.params.id))
  return res.status(200).json(myFavorites);
}

function getFav(req, res){
  return res.json(myFavorites);
};

module.exports = {postFav, deleteFav, getFav};