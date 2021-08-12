const router = require('express').Router()
const paisController = require('../controller/paisController')
router
.get('/mostrar', paisController.mostrarPais)
.post('/agregar', paisController.crearPais);


module.exports = router;