const express = require('express')
const route = require('./routes/routes.js')
const mongoose = require('mongoose')
const app = express()
const multer = require("multer")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(multer().any())


mongoose.connect("mongodb+srv://SonuKumarYadav9:Sk957079%40@cluster0.9bcnwnf.mongodb.net/Project-5", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port: ' + (process.env.PORT || 3000))
}) 