require('./config/config');
require('./config/conexionMongoDb');

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();
const hbs = require('hbs');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
//Helpers
require('./hbs/helpers');
//Express HBS engine        
hbs.registerPartials(path.join(__dirname, "../", "/views/parciales"));
app.set('view engine', 'hbs');


//Configuracion global de rutas
app.use(require('./routes/index').app);




let server = http.createServer(app);
//io: esta es la comunicacion del Backend.
module.exports.io = socketIO(server);
require('./socket/socket');
server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);

});