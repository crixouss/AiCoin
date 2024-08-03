const {body, validationResult} = require('express-validator');
const {createToken} = require("../services/serviceJwt");
const {register} = require("../services/serviceUser");
const {parseError} = require("../utils/parseError");

const postRegister =[
    // Validation middleware
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email format')
        .isLength({ min: 10 }).withMessage('Email must be at least 10 characters long'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
    body('repeatPassword')
        .trim()
        .custom((value, { req }) => value === req.body.password).withMessage('Passwords must match!'),

    // Request handler
    async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body)
        try {
            const validation = validationResult(req);

            if (!validation.isEmpty()) {
                return res.status(400).json({
                    data: { email },
                    errors: validation.array().map(err => err.msg)
                });
            }

            const result = await register(email, password);
            const token = createToken(result);

            res.cookie('token', token, { httpOnly: true });
            res.status(201).json({ status: 'success' });
        } catch (err) {
            res.status(500).json({
                data: { email },
                errors: parseError(err).errors
            });
        }
    }
];


module.exports = { postRegister };