const { request } = require('http');
const {Pastel, Comentario} = require('../model/modelpasteles');

module.exports = {
    //metodo para crear un nuevo pastel
    nuevo: async function (req, res) {
        const body = req.body;
        const user = new Pastel(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },
    buscaTodos: async function (req, res) {         //mostrar todos los pasteles ordenados
        const datas = await Pastel.find();//.sort({type:'asc'});
        res.json(datas);
    },

    buscarUno: async function (req, res) {
        const id = req.params.id
        const datas = await Pastel.findOne({_id: id});
        res.json(datas);
    },
    ingresarComentario: async function (req,res) {
        const id = req.params.id
        const {puntuacion, comentario} = req.body
        const data = await Pastel.findOneAndUpdate({_id: id}, {$push: {comentarioPastel: {puntuacion, comentario}}}) 
        .then( data => res.json(data))
        .catch(err => res.json(err));
    }
}