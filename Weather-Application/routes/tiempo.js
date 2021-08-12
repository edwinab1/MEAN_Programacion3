const router = require('express').Router();
const tiempoController = require('../controller/tiempoController');

router
.get('', tiempoController.getCiudades)
.post('/insertar', tiempoController.postCiudades);


module.exports = router;