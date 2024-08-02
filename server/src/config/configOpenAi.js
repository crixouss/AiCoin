// config/configOpenAi.js
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const model = "gpt-4o";

module.exports = {
    openai,
    model,
};
