require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const errorHandler = require('./helper-func/error-handler');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ADMIN_URI;//database uri

mongoose.connect(uri, {
  useNewUrlParser: true, //new connection behind the flag
  useCreateIndex: true //deprecating the ensure index
});//connect to database

const connection = mongoose.connection; 
connection.once('open', () =>{
  console.log("Mongodb database terkoneksi ");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/auth', require('./routers/auth/index'));
app.use('/menu', require('./routers/menu/index'))
app.use('/tabungan', require('./routers/tabungan/index'));
app.use('/hist', require('./routers/hist/index'))

// start server
const port = process.env.PORT || 3001;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});