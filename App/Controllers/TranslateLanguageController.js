/**
 * @author Matheus Biagini
 * @version 1.0
 * @class TranslateLanguageController
 */
module.exports = function(app) {
    app.get('/translate/language/portuguese', function(req, res){
        var queryString = req.query
        var toTranslateLanguage = new app.App.Services.Translate();
        
        toTranslateLanguage.translateForPortuguese(queryString.text, function(error, translation){
            if(error) {
                console.log(error);
                return;
            }
            
            res.json(translation);
        });
    });
    
    app.get('/translate/language/english', function(req, res){
        var queryString = req.query
        var toTranslateLanguage = new app.App.Services.Translate();
        
        toTranslateLanguage.translateForEnglish(queryString.text, function(error, translation){
            if(error) {
                console.log(error);
                return;
            }
            
            res.json(translation);
        });
    });
};
