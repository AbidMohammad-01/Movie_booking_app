const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
DB_URL=process.env.MONGO_DB_URL_LOCAL
mongoose.connect(DB_URL)
.then(()=>{console.log('Connected');})
.catch((err)=>{console.log('Error',err);})

const movieApp = require('../backend/APIs/movie.api')
const userApp = require('../backend/APIs/user.api')
const ticketApp = require('../backend/APIs/ticket.api')
app.use(express.json())
app.use('/api/v1.0/moviebooking',movieApp)
app.use('/api/v1.0/moviebooking',userApp)
app.use('/api/v1.0/moviebooking',ticketApp)
app.listen(process.env.PORT,()=>{
   console.log( "Hi from Abid")
})
