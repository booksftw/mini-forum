const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ('mongoose');

const postsRoutes = require('./routes/posts')
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect('mongodb+srv://znick46:GDpi36S4FkQrI4uE@nickdb-egqkr.mongodb.net/nzmongodb0?retryWrites=true')
  .then( () => {
    console.log('Connected to database');
  })
  .catch( (err) => {
    console.log('Connection Failed')
    console.log(err)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
