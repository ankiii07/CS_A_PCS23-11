const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/user');
const orderRoute = require('./api/routes/orders')
const cors = require('cors');

mongoose.connect('mongodb+srv://Hrhk:Hrhk@cluster0.54zdahr.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error', Error => {
  console.log('connection failed')
})

mongoose.connection.on('connected', Connected => {
  console.log('connected with database...')
})
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute) ;
app.use('/orders', orderRoute) ;


app.use((req, res, next) => {
  res.status(404).json({
    error: 'bad req'
  })
})

module.exports = app;