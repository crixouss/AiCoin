const { Router } = require('express');
const {postUser} = require("../controllers/auth");
const {isGuest} = require("../middlewares/guards");

const router = Router()
//HERE ROUTES TO BE DONE

router.post('/user/register',isGuest(), postUser)
module.exports = { router }