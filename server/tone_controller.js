// IBM WATSON TONE ANALYZER
require("dotenv").config();
var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

var toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  iam_apikey: process.env.WATSON_APIKEY,
  url: process.env.WATSON_URL
});

module.exports = {
  getToneAnalysis: (req, res, next) => {
    const { userText } = req.body;
    console.log("userText", userText);
    const toneParams = {
      tone_input: { text: userText },
      content_type: "application/json"
    };

    toneAnalyzer.tone(toneParams, function(error, toneAnalysis) {
      if (error) {
        console.log(error);
      } else {
        console.log(JSON.stringify(toneAnalysis, null, 2));
        res.status(200).send(toneAnalysis);
      }
    });
  }
};
