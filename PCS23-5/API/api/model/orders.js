const mongoose= require('mongoose');

const orderSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  Name: String,
  Phone : Number,
  Address: String,
  Brand: String,
  Modal: String,
  Fuel: String,
  Service: String ,
  Localtion : String,

})

module.exports = mongoose.model('order', orderSchema)