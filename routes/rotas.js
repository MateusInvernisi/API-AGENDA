const { Router } = require("express");

const {rotasUsuarios } = require('./rotasUsuarios');
const {rotasEventos } = require('./rotasEventos');
const {rotasLogins} = require('./rotasLogin')


const rotas = new Router();

rotas.use(rotasUsuarios);
rotas.use(rotasEventos)
rotas.use(rotasLogins);


module.exports = rotas;