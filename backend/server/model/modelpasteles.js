const mongoose = require('mongoose')

//Generamos un esquema de objeto JSON que almacenaremos
const ComentarioPastelSchema = new mongoose.Schema(
    {
        puntuacion: {type: String},
        comentario: {type: String}
    }, { timestamps: true }

);
//Generamos un esquema de objeto JSON que almacenaremos
const PastelSchema = new mongoose.Schema(
    {
    nombrePastelero: {type: String},
    fotoPastelUrl: {type: String},
    comentarioPastel: [ComentarioPastelSchema]
    }, { timestamps: true }

);
const Pastel = mongoose.model('pastel', PastelSchema);
const Comentario = mongoose.model('comentarioPastel', ComentarioPastelSchema);
module.exports = {Pastel, Comentario};


