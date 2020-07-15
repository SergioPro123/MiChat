const express = require('express');
const Usuario = require('../models/usuario');
const bcript = require('bcrypt');
const funciones = require('./funciones/funciones');
const app = express();



app.post('/usuario', (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        correo: body.correo,
        password: bcript.hashSync(body.contrasena, 10)
    });

    usuario.save((err, usuarioDB) => {
        funciones.revisarError(err, res, usuarioDB);
    });
});


module.exports = {
    app
};