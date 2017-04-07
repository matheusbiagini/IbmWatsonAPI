var express     = require('express');
var consign     = require('consign');
var bodyParser  = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan');
var logger = require('../App/Services/Logger.js');

module.exports = function(){
    var app = express();
    
    app.use(morgan("common", {
        stream: {
            write: function(mensagem){
                logger.info(mensagem);
            }
        }
    }));
    
    app.use(express.static('./app/public'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    consign()
        .include('App/Controllers')
        .then('App/Repositories')
        .then('App/Services')
        .into(app);
    
    return app;
};

