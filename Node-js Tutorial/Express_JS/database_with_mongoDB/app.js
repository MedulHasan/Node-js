const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String
// })
// let Test = mongoose.model('Test', testSchema)

app.use('/contact', router)

app.get('/', (req, res) => {
    // let test = new Test({
    //     name: 'medul'
    // })
    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         res.status(500).json({
    //             error: 'Error Occurred'
    //         })
    //     })
})

const PORT = process.env.PORT || 8088
mongoose
    .connect(`mongodb+srv://user1:pass1@cluster0.wa1q4.mongodb.net/dbtest1?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        })
    })
    .catch(e => {
        console.log(e);
    })
