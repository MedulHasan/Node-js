const express = require('express')

const app = express() //create a application server

app.get('/home', (req, res) => {
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