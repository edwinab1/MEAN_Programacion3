const ciudad = require('../model/ciudad');
const mongoose = require('mongoose');

module.exports = {

    getCiudades: (req, res)=> {
        ciudad.find({}, (err, result)=>{

            if(err)
                return console.log(err);

            return res.json(result);

        }).sort({'fecha':'DESC'})
        
        ;
    },

    // nombre: { type: String, required: true },
    // temperatura: { type: Number, required: true },
    // humedad: { type: Number, required: true },
    // presion: { type: Number, required: true },
    // velocidad: { type: Number, required: true },
    // fecha: { type: Date, required: true, default: Date.now },
   

    postCiudades:(req, res) => {

        let body = req.body;
        console.table(body);

        let city = new ciudad({
            nombre: body.nombre,
            temperatura: body.temperatura,
            presion: body.presion,
            velocidad: body.velocidad,
            humedad: body.humedad,
        })

        city.save((err, result) => {
            if(err) return res.json(err)

            return res.json(result);
        });

        


    }

   

}

