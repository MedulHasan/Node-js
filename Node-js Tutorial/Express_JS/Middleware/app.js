const express = require('express')
const morgan = require('morgan') //3rd party middleware

const app = express()

// app.use(morgan('dev')) //middleware of evert route

// custom middleware
function customMiddleware(req, res, next) {
    // console.log('i am logged', req.url);

    // if(req.url === '/about') {
    // res.send('<h1>Sorry, the page is blocked by admin</h1>')
    // }

    next()
}

function tinylogger() {
    return (req, res, next) => {
        console.log(`${req.method} - ${req.url}`);
        next()
    }
}

const middleware = [customMiddleware, tinylogger()]

app.use(middleware)

// app.use(customMiddleware)

app.get('/home', morgan('dev'), (req, res) => {
    // res.send('<h1>I am home page</h1>')
    res.json({
        message: 'hello i am a home page'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>I am about page</h1>')
})

//root route handling
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

let PORT = process.env.PORT || 8080 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})