
const {body} = require('express-validator')
const User = require('../../models/User')

module.exports = [
    body('username')
        .isLength({min: 2, max: 15}).withMessage('User Name Must Be Between 2 to 15 Chars')
        .custom(async username => {
            let user = await User.findOne({username})
            if(user) {
                return Promise.reject('Username Already Used')
            }
        })
        .trim(),

    body('email')
        .isEmail().withMessage('Please Provide a valid Email')
        .custom(async email => {
            let user = await User.findOne({email})
            if(user) {
                return Promise.reject('Email Already Used')
            }
        })
        .normalizeEmail(),

    body('password')
        .isLength({min: 5}).withMessage('Password must be Greater then 5'),

    body('confirmPassword')
        .isLength({min: 5}).withMessage('Password must be Greater then 5')
        .custom((confirmPassword, {req}) => {
            if(confirmPassword !== req.body.password) {
                throw new Error('Password Does Not Match')
            }
            return true
        })
]