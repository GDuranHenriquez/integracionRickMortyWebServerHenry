//Rutas de favoritos
const express = require('express'); 
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites');

const favRoutes = express.Router();
// TODAS LAS REQ QUE LLEGUEN A ESTE ARCHIVO TIENEN EL "/favoritos" IMPLICITO

favRoutes.get("/", getFav);
favRoutes.post("/", postFav);
favRoutes.delete("/:id", deleteFav);

module.exports = favRoutes;
