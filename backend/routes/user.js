const express = require("express");
const bcrypt = require("bcrypt");

const User = require('../models/user');

const router = express.Router();

router.post("/signup", (req, res, next) => {
  console.log('backend here')
  bcrypt.hash(req.body.password, 10)
    .then( hash => {
      console.log(req.body)
      const user = new User({
        email:  req.body.email,
        password: hash
      })
      user.save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      });
    })

})

// router.get('/signup', (req, res, next) => {console.log('hi sign up get request')})

module.exports = router
