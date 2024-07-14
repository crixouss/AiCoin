const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { OpenAI } = require('openai');
const model = "gpt-3.5-turbo";

const openai = new OpenAI({
    apiKey: "sk-proj-XhQNXWZmeHUbQGBNvPjPT3BlbkFJftUVoLXbrvnCzDIhzrLE",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
    console.log(req.body.message);
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).send({ error: 'Prompt is required' });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: "system", content: "I will integrate you in a coin analyzing app. Also give the exact prise ranges of the last coins sold, based on condition of the coin, Poor to Good Condition: , Very Fine to Extra Fine Condition:, Perfect Condition:" },
                { role: "user", content: prompt }
            ],
            max_tokens: 512,
            temperature: 0.7,
        });

        res.json(completion.choices[0].message);
    } catch (error) {
        console.error("Error creating completion: ", error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
