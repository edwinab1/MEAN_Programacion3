const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ciudadSchema = new Schema({
    nombre: { type: String, required: true },
    temperatura: { type: Number, required: true },
    humedad: { type: Number, required: true },
    presion: { type: Number, required: true },
    velocidad: { type: Number, required: true },
    fecha: { type: Date, required: true, default: Date.now },
    pais: { type: Schema.Types.ObjectId, ref:'Pais'},


});


module.exports = mongoose.model('Ciudad', ciudadSchema);


