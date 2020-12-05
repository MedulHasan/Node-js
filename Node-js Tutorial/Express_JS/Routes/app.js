const express = require('express')
const morgan = require('morgan')

const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

const app = express()
app.use(morgan('dev'))
 
app.use('/user', userRouter)
app.use('/post', postRouter)

// app.get('/products/:prodId/reviews/:reviews', (req, res) => {
//     res.send('i am lestening ' + req.params.prodId + " " + req.params.reviews)
// })

app.get('/', (req, res) => {
    res.send('<h1>Node ja is Awesome!!!</h1>')
})

const port = process.env.port || 8081
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})