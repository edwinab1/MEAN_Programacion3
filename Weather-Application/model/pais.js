const mongoose = require('mongoose');
const paisSchema = mongoose.Schema;

const pais = new paisSchema({

    nombre: { type: String, required: true },
    bandera: { type: String, required: true},
    codigo: { type: String, required: true}

});

module.exports = mongoose.model('Pais',pais);