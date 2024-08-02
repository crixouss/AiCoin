// main.js (or app.js, index.js, etc.)
const { app, upload } = require('./config/configExpress');
const { processChat } = require('./services/openaiService');

app.post("/chat", upload.single('file'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).send({ error: 'File is required' });
    }

    console.log(`Received file: ${file.originalname}`);

    try {
        const responseMessage = await processChat(file);
        res.json(responseMessage);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
