const { Router } = require('express');
const { getEvento, addEvento, updateEvento, deleteEvento, getEventoPorCodigo  } = 
    require('../controllers/eventoController');
const { verificaJWT } = require('../controllers/loginController'); 

const rotasEventos = new Router();

rotasEventos.route('/evento')
               .get(verificaJWT,getEvento)
               .post(verificaJWT,addEvento)
               .put(verificaJWT, updateEvento)


rotasEventos.route('/evento/:codigo') 
               .get(verificaJWT, getEventoPorCodigo)              
               .delete(verificaJWT, deleteEvento);

module.exports = {rotasEventos};