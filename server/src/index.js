// main.js (or app.js, index.js, etc.)
const {configExpress, upload} = require('./config/configExpress');
const { processChat } = require('./services/openaiService');
const express = require("express");


async function start() {
    const app = express();
    configExpress(app);
    const port = 8080;
    app.listen(port, () => console.log(`Listening on port ${port}`));

    app.post("/user/register", (req, res) => {
        console.log(req.body);
        res.json({ status: "success" });
    })

    app.post("/chat", upload.single('file'), async (req, res) => {
        const file = req.file;

        if (!file) {
            return res.status(400).send({error: 'File is required'});
        }

        console.log(`Received file: ${file.originalname}`);

        try {
            const responseMessage = await processChat(file);
            res.json(responseMessage);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

start()