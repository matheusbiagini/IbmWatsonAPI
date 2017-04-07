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
        
        toTranslate.translateForEnglish(body.text, function(error, translation){
            if(error) {
                console.log(error);
                res.status(500);
                return;
            }
            
            toAnalyze.analyzer(translation.translations.translation, function(err, tone){
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
