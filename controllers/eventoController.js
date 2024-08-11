const { getEventosDB, addEventoDB, updateEventoDB, deleteEventoDB, getEventoPorCodigoDB } 
= require('../useCases/eventoUseCases')

const getEvento = async (request, response) => {
    await getEventosDB()
          .then(data => response.status(200).json(data))
          .catch(err => response.status(400).json({
            status : 'error',
            message : 'Erro ao consultar os eventos: ' + err
          }))
}

const addEvento = async (request, response) => {
    await addEventoDB(request.body)
          .then(data => response.status(200).json({
                status : "success", message : "evento criado",
                objeto : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const updateEvento = async (request, response) => {
    await updateEventoDB(request.body)
          .then(data => response.status(200).json({
                status : "success", message : "evento alterado",
                objeto : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const deleteEvento = async (request, response) => {
    await deleteEventoDB(request.params.codigo)
          .then(data => response.status(200).json({
                status : "success", message : data
          }))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

const getEventoPorCodigo = async (request, response) => {
    await getEventoPorCodigoDB(request.params.codigo)
          .then(data => response.status(200).json(data))
          .catch(err => response.status(400).json({
            status : 'error',
            message : err
          }))
}

module.exports = {
   addEvento, getEvento, getEventoPorCodigo, updateEvento, deleteEvento
}