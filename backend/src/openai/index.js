require('dotenv').config();

const openai = require("openai");

const { Configuration, OpenAIApi } = openai;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY || '',
});

const openaiAPI = new OpenAIApi(configuration);

module.exports = {
    openaiAPI,
}