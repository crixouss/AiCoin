const { Router } = require('express');
const {postRegister} = require("../controllers/authRegister");
const {isGuest} = require("../middlewares/guards");
const {postLogin} = require("../controllers/authLogIn");

const router = Router()
//HERE ROUTES TO BE DONE

router.post('/user/register', isGuest(), postRegister)
router.post('/user/login', isGuest(), postLogin)

module.exports = { router }