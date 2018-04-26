// Configurer le serveur
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs')

const port = 8080;
const server = express();

const frontRoute = require('./routes/front');
const apiRoute = require('./routes/api');

//=> Use path to add views
server.set( 'view engine', 'ejs' );
server.set( 'views', __dirname + '/www' );
server.use( express.static(path.join(__dirname, 'www')) );

// Configurer body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Ajouter les routes
server.use('/', frontRoute);
server.use('/api', apiRoute);

// Ecouter le serveur sur le port 8080
server.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );