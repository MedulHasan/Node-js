const express = require('express')
const morgan = require('morgan')

const contactsRoute = require('./contactsRoute')

const app = express()
app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactsRoute)

app.get('*', (req, res) => {
    res.send('<h1>Please Use The Currect Routes</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})