const { Router } = require('express');
const {postUser} = require("../controllers/auth");

const router = Router()
//HERE ROUTES TO BE DONE

router.post('/user/register', postUser)
module.exports = { router }