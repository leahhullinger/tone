require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tone = require("./tone_controller");

const app = express();

app.use(express.static(`${__dirname}/client/app.js`));
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS
app.post("/api/tone-request", tone.getToneAnalysis);
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
