require('dotenv').config();
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET_KEY;
function createToken(userData) {
    const payload = {
        email: userData.email,
        _id: userData._id,
    };
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d'
    });
    console.log(token);
    return token;
}

function verifyToken(token) {
    const data = jwt.verify(token, secret);
    console.log(data)
    return data;
}

module.exports = {
    createToken,
    verifyToken
}