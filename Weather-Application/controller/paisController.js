const paisModel = require('../model/pais')
const expressValidations = require('express-validations');

module.exports = {

    crearPais: (req, res) => {
        let body = req.body;


        if (paisValido(body.nombre)) {

            let pais = new paisModel({
                nombre: body.nombre,
                bandera: body.bandera,
                codigo: body.codigo

            });

            pais.save()
                .then(result => {
                    return res.json(result);

                }).catch(err => { console.log });
        }
        else{
            res.json('El nombre del pais no es valido')
        }

        
    },

    mostrarPais: (req, res) => {
        paisModel.find((err, pais) => {

            if (err) return res.json(err);

            return res.json(pais);
        });
    }

}

//validar nombre de pais

const paisValido = (text) => {


    if (expressValidations.containsNotNumber(text)) {
        return true
    } else {
        return false;
    }

}