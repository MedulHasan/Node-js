
const userRouter = require('express').Router()

userRouter.get('/login', (req, res) => {
    res.send('I am login route')
})

userRouter.get('/logout', (req, res) => {
    res.send('I am logout route')
})

userRouter.get('/signup', (req, res) => {
    res.send('I am signup route')
})

module.exports = userRouter
