/*
 * @author Matheus Biagini
 */
var app = require('./Config/CustomExpress')();

app.listen(3000, function(){
   console.log('Servidor rodando na porta 3000.'); 
});

