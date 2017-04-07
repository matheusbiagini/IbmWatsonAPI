var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var config = require('../../Config/Config')();

function Analyzer()
{
    this.tone_analyzer = new ToneAnalyzerV3({
        username: config.credentialTonyAnalyze.username,
        password: config.credentialTonyAnalyze.password,
        version_date: config.credentialTonyAnalyze.version_date
    });
    
    this.analyzer = function(text, callback)
    {
        return this.tone_analyzer.tone({ text: text }, callback);
    }
}

module.exports = function(){
    return Analyzer;
}




