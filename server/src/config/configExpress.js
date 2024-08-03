const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require("cookie-parser");
const {session} = require("../middlewares/session");
require('dotenv').config();

const secret = process.env.SECRET_KEY;

function configExpress(app) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(cookieParser(secret));
    app.use(session())
    console.log('Loaded SECRET_KEY:', process.env.SECRET_KEY);
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = {
    upload,
    configExpress,
};
