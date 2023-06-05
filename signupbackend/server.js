
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv') ////Use packet .env(Doteven)

const routesUrlsb = require('./routes/routes')
const routesUrlsbC = require('./routes/ArtRoutes')
const cors = require('cors')

dotenv.config()

//Connection string
mongoose.connect('connectionString',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
console.error('Error connecting to MongoDB:', error);
});

app.use(express.json())
app.use(cors())
app.use('/app', routesUrlsb)
app.use('/app', routesUrlsbC)
app.listen(4000, ()=> console.log("server is up and running"))
