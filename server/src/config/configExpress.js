// config/configExpress.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

function configExpress(app) {
    app.use(cors());
    app.use(bodyParser.json());
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = {
    upload,
    configExpress,
};
