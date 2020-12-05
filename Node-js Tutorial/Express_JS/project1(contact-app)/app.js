const express = require('express')
const morgan = require('morgan')

const userContact = require('./contactRouter')

const app = express()
app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', userContact)

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found --</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`The Server is Running On Port ${PORT}`);
})