var winston = require('winston');
var fs = require('fs');

if(!fs.existsSync('Logs')){
    fs.mkdirSync('Logs');
}

module.exports = new winston.Logger({
   transports: [
       new winston.transports.File({
           level: "info",
           filename: "./Logs/log_express.log",
           maxsize: 100000,
           maxFiles: 10
       })
   ] 
});