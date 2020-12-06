const express = require('express')
const morgan = require('morgan')
// let ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/about', (req, res) => {
    res.render('pages/about', {pageTitle: 'About'})
})

app.get('/help', (req, res) => {
    res.render('pages/help')
})

app.get('/', (req, res) => {
    // res.send('Working with Template Engine --')
    let post = {
        title: 'test title',
        body: 'test body',
        publish: false
    }

    let posts = [
        {title: 'one', name: 'medul'},
        {title: 'two', name: 'medul'},
        {title: 'three', name: 'medul'},
        {title: 'four', name: 'medul'}
    ]

    res.render('pages/index', {
        title: 'Ejs is Awesome!!',
        post,
        posts,
        pageTitle: 'index'
    })
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})