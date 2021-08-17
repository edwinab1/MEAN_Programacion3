const router = require('express').Router();
const tiempoController = require('../controller/tiempoController');

router
    .get('', tiempoController.getCiudades)
    .post('/insertar', tiempoController.postCiudades)
    .delete('/eliminar/:id', tiempoController.eliminarCiudad)
    ;


module.exports = router;