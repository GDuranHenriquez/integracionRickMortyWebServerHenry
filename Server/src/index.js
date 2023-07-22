require("dotenv").config(); // Agrega al objeto "process" en la prop "env" nuestras variables.
//Variables de entorno
const { PORT } = process.env;
const morgan = require("morgan");
const cors = require("cors");

//Routers
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favRoutes = require("./routes/favorites");

//Express
const express = require('express');
//Creando el servidor
const server = express();

// Permisos -> Cors
/* server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
}); */


// Middlewars
server.use(express.json()); // para poder recibir JSON por req.body
/* server.use((req, res, next) =>{
   // Agregamos la cadena "/rickandmorty" antes de cada una de las rutas.
   req = "/rickandmorty" + req.url;
   //Continuamos con la siguiente función.
   next();
   console.log(req.headers)
}); */
server.use(morgan("dev")); // Me muestra en consola como sale la REQ y la RES
server.use(cors()); // Habilito las CORS para que cualquier origen pueda enviar solicitud a mi servidor


// Routers --> Que rutas voy a usar
server.use("/rickandmorty/character", characterRouter);
server.use("/rickandmorty/user", userRouter);
server.use("/rickandmorty/favorites", favRoutes);

server.get("/health-check", (req, res) => {
   res.send("Working");
 });

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
 