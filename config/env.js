require("dotenv").config();

module.exports = {
  BASE_URL: process.env.BASE_URL,
  OPENF1_URL: process.env.OPENF1_URL,
  HEADLESS: process.env.HEADLESS === "true",
  BROWSER: process.env.BROWSER
  
};

