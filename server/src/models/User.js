const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    collation: {
        locale: 'en',
        strength: 2,
    }
}, {
    collection: 'user-data'
})

const User = model("User", userSchema);

module.exports = { User }