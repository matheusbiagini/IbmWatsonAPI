var mysql = require('mysql');
var config = require('../../Config/Config');

var createConnection = function()
{
    return mysql.createConnection({
        host    : config.database.dbHost,
        user    : config.database.dbUser,
        password: config.database.dbPassword,
        database: config.database.dbDatabase
    });
}

module.exports = function() {
    return createConnection;
};



