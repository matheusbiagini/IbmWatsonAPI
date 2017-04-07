var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
var config = require('../../Config/Config')();

function Translate()
{
    this.language_translator = new LanguageTranslatorV2({
        username: config.credentialLanguageTranslate.username,
        password: config.credentialLanguageTranslate.password,
        url: config.credentialLanguageTranslate.url
    });
    
    this.translateForEnglish = function(text, callback)
    {
        this.language_translator.translate({
                text: text, 
                source : 'pt', 
                target: 'en'
        },callback);
    };
    
    this.translateForPortuguese = function(text, callback)
    {
        this.language_translator.translate({
                text: text, 
                source : 'en', 
                target: 'pt'
        },callback);
    };
}

module.exports = function(){
    return Translate;
}




