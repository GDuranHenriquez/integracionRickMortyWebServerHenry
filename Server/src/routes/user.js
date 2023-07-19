//Rutas user.
const {loginUser} = require('../controllers/login');

const userRouter = require('express').Router();
// TODAS LAS REQ QUE LLEGUEN A ESTE ARCHIVO TIENEN EL "/login" IMPLICITO

userRouter.get("/login", loginUser);

module.exports = userRouter;