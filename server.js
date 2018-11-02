require('dotenv');
var http = require('http');
var app = require('./app');
var server = http.createServer(app);
server.listen(process.env.PORT || 3300);
console.log('Felicitaion Issa ! bienvenue au serveur de la boutique');
