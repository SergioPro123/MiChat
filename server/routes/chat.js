const express = require('express');
const { verificaToken } = require('../middleware/autenticacion');

const app = express();

app.get('/chat', (req, res) => {
    return res.render('chat.hbs');
});


module.exports = {
    app
};