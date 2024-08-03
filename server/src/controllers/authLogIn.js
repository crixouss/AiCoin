const { body, validationResult } = require('express-validator');
const { createToken } = require("../services/serviceJwt");
const { login } = require("../services/serviceUser");
const { parseError } = require("../utils/parseError");

const postLogin = [
    // Validation middleware
    body('email')
        .trim()
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),

    // Request handler
    async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        try {
            const validation = validationResult(req);

            if (!validation.isEmpty()) {
                return res.status(400).json({
                    data: { email },
                    errors: validation.array().map(err => err.msg)
                });
            }

            const user = await login(email, password);
            if (!user) {
                return res.status(401).json({ errors: ['Invalid email or password'] });
            }

            const token = createToken(user);

            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ status: 'success' });
        } catch (err) {
            res.status(500).json({
                data: { email },
                errors: parseError(err).errors
            });
        }
    }
];

module.exports = { postLogin };
