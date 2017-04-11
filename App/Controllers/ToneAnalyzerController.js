/**
 * @author Matheus Biagini
 * @version 1.0
 * @class TranslateLanguageController
 */
module.exports = function(app) {
    app.get('/tone/analyzer', function(req, res){
        var queryString = req.query
        var toAnalyze = new app.App.Services.ToneAnalyzer();
        
        toAnalyze.analyzer(queryString.text, function(error, tone){
            if(error) {
                console.log(error);
                return;
            }
            
            res.json(tone);
        });
    });
    
    app.post('/tone/analyzer/transcover', function(req, res){
        var body = req.body;
        var toAnalyze = new app.App.Services.ToneAnalyzer();
        var toTranslate = new app.App.Services.Translate();
        
        req.assert("text", "Valor inválido ou não informado").notEmpty();
        
        var erros = req.validationErrors();
        
        if(erros) {
            console.log('Houve um de validação. Erros: ' + erros);
            res.status(400).send(erros);
            return;
        }
        
        toTranslate.translateForEnglish(body.text, function(error, translation){
            if(error) {
                console.log(error);
                res.status(500);
                return;
            }
            
            var textTranslation = translation.translations;
            
            console.log(textTranslation[0].translation);
            console.log(textTranslation);
            
            toAnalyze.analyzer(textTranslation[0].translation, function(err, tone){
                if(err) {
                    console.log(error);
                    res.status(500);
                    return;
                }

                res.json(tone);
            });
        });
    });
};
