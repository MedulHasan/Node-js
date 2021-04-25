const express = require('express')
const morgan = require('morgan')

const app = express()

function customMiddleware(req, res, next) {
    if (req.url === '/help') {
        res.send('<h1>Help is blocked</h1>')
    }
    next()
}

function Logger() {
    return (req, res, next) => {
        console.log(`this is-${req.method} - ${req.url}`);
        next()
    }
}

const middleware = [customMiddleware, Logger()]
app.use(middleware)

// app.use(morgan('dev'))

app.get('/about', morgan('dev'), (req, res) => {
    res.send('<h1>About MiddleWare</h1>')
})
app.get('/help', (req, res) => {
    res.send('<h1>Help MiddleWare</h1>')
})
app.get('/', (req, res) => {
    res.send('<h1>Hello MiddleWare</h1>')
})
app.get('*', (req, res) => {
    res.send('<h1>404 Not Fount</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running ouport ${PORT}`);
})