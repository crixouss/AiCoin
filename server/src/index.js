const {configExpress, upload} = require('./config/configExpress');
const {processChat} = require('./services/serviceOpenai');
const express = require("express");
const {router} = require("./config/configRoutes");
const {configDatabase} = require("./config/configDatabase");


async function start() {
    const port = 8080;
    const app = express();
    configExpress(app);
    await configDatabase()
    app.use(router)
    app.listen(port, () => console.log(`Listening on port ${port}`));

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