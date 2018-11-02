var express = require('express');
require('dotenv');
var app = express();
var db = require("./db/db");
var bodyParser = require('body-parser');
var morgan = require('morgan');
//var multer = require('multer'); multer je le mets en comentaires car je sais pas enore si le user aura besoin de upload une image

// recuperation des routes
var RS = {
    usersRoutes : require('./api/routes/users'),
    connexion : require('./api/routes/connexion')
}  

// middlewares
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//app.use('/statics', express.static('statics')); // hey issa ici c'est pour les fichiers statiques. puis que c'est les users qi mous interesse.
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Resquested-With, Content-Type, Accept, Athorization');
    if (req.method ==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        res.status(200).json({});
    }
    next();
});

// gestion des routes 
app.use('/users', RS.usersRoutes);
app.use('/connexion', RS.connexion);

// gestion des erreurs
app.use(function(req, res, next){
    var error = new Error('not found');
    error.status = 404;
    next(error);
});
app.use(function(err, req, res, next){
    res.status(err.statut || 500);
    res.json({
        error : {
            message : "oups ! ce lien n'exsiste pas"    
        }
        

    });
});














module.exports = app;