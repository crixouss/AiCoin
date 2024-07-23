const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { OpenAI } = require('openai');

const model = "gpt-4o";

const openai = new OpenAI({
    apiKey: "sk-proj-XhQNXWZmeHUbQGBNvPjPT3BlbkFJftUVoLXbrvnCzDIhzrLE",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/chat", upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).send({ error: 'File is required' });
    }

    console.log(`Received file: ${file.originalname}`);
    // You can process the file here if needed.

    try {
        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: "system", content: "I will integrate you in a coin analyzing app. Also give the exact price ranges of the last coins sold, based on condition of the coin, Poor to Good Condition: , Very Fine to Extra Fine Condition:, Perfect Condition:. Don't say that you are an AI! make it on 1888 10 pfennig" },
                { role: "user", content: " Also give the exact price ranges of the last coins sold, based on condition of the coin, Poor to Good Condition: , Very Fine to Extra Fine Condition:, Perfect Condition:. make it on 1888 10 pfennig" }
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
