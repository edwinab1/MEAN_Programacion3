const ciudad = require('../model/ciudad');

module.exports = {

    getCiudades: (req, res)=> {
        ciudad.find({}, (err, result)=>{

            if(err)
                return console.log(err);

            return res.json(result);

        })
        .sort({'fecha':'DESC'})
        .populate('pais', '-_id nombre')
        
    },


   

    postCiudades:(req, res) => {

        let body = req.body;
        console.table(body);

        let city = new ciudad({
            nombre: body.nombre,
            temperatura: body.temperatura,
            presion: body.presion,
            velocidad: body.velocidad,
            humedad: body.humedad,
            pais: body.pais
        })

        city.save((err, result) => {
            if(err) return res.json(err)

            return res.json(result);
        });

        


    }

   

}

