const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Orders = require("../model/orders");

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "dgddrdrdr",
  });
});

router.post("/", (req, res, next) => {
 
  const order = new Orders({
    _id: new mongoose.Types.ObjectId,
    Name: req.body.Name,
    Phone: req.body.Phone,
    Address: req.body.Address,
    Brand: req.body.Brand,
    Modal: req.body.Modal,
    Fuel: req.body.Fuel,
    Service: req.body.Service,
    Location: req.body.Location,
  });
  order.save().then(result => {
      console.log(result);
      res.status(200).json({
        newOrder: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports=router;