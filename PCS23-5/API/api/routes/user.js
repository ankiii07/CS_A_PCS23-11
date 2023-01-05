const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const user = require('../model/user');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    }
    else {
      const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hash,
        userType: req.body.userType,
      })

      user.save().then(result => {
        res.status(200).json({
          new_User: result
        })
      })
        .catch(err => {
          res.status(500).json({
            error: err
          })
        })
    }
  });

})

router.post('/login', (req, res, next) => {
  user.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          msg: 'user not found'
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            msg: 'password dose not match'
          })
        }
        if (result) {
          const token = jwt.sign({
            name: user[0].name,
            userType: user[0].userType,
            phone: user[0].phone,
            email: user[0].email,
          },
            'this is dummy text',
            {
              expiresIn: "24h"
            }
          );
          res.status(200).json({
            name: user[0].name,
            userType: user[0].userType,
            phone: user[0].phone,
            email: user[0].email,
            token: token
          })
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})


module.exports = router;
