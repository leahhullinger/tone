const PersonalityInsightsV3 = require("watson-developer-cloud/personality-insights/v3");
const PersonalityTextSummaries = require("personality-text-summary");
const { username, password } = require("./credentials");
const axios = require("axios");

const personalityInsights = new PersonalityInsightsV3({
  version: "2017-10-13",
  username,
  password,
  url: "https://gateway.watsonplatform.net/personality-insights/api"
});
const v3EnglishTextSummaries = new PersonalityTextSummaries({
  locale: "en",
  version: "v3"
});

module.exports = {
  newPersonality: (req, res) => {
    console.log("req.body", req.body);
    let { text } = req.body;
    const profileParams = {
      content: text,
      content_type: "text/plain;charset=utf-8",
      raw_scores: "false",
      consumption_preferences: "true"
    };
    personalityInsights.profile(profileParams, function(error, response) {
      if (error) {
        console.log(error);
      } else {
        res.status(200).send(getTextSummary(response));
      }
    });
    const getTextSummary = profile => {
      let textSummary = v3EnglishTextSummaries.getSummary(profile);
      if (typeof textSummary !== "string") {
        console.log("Could not get summary.");
      } else {
        return textSummary;
      }
    };
  }
};
