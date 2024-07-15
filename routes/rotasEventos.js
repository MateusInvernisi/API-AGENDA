const { Router } = require('express');
const { getEvento, addEvento, updateEvento, deleteEvento, getEventoPorCodigo  } = 
    require('../controllers/eventoController');

const rotasEventos = new Router();

rotasEventos.route('/evento')
               .get(getEvento)
               .post(addEvento)
               .put(updateEvento)


rotasEventos.route('/evento/:codigo') 
               .get(getEventoPorCodigo)              
               .delete(deleteEvento);

module.exports = {rotasEventos};