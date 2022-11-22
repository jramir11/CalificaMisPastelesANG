module.exports = function (app) {
    const express = require('express');
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    //controlador de las llamadas a servicios
    const controller = require('../controller/controller')
    app.post('/nuevo', function (req, res) {
        controller.nuevo(req,res);
    });
    app.get('/buscarUno/:id', function (req, res) {
        controller.buscarUno(req,res);
    });
    app.post('/ingresarComentario/:id', function (req, res) {
        controller.ingresarComentario(req,res);
    });
    app.get('/buscatodos', function (req, res) {
        controller.buscaTodos(req,res);
    });
}