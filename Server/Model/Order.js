require('dotenv').config();
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  User: {
    Country: String,
    Fname: String,
    Lname: String,
    Phone: String,
    Address: String,
    State: String,
    City: String,
    Code: String,
    message: String,
    Delivery: Number,
    Total: Number,
    Checkbox: Boolean,
  },
  CARTS: [
    {
      rname: {
        type: String,
        required: true,
      },
      imgdata: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      qnty: {
        type: Number,
        required: true,
      },
    },
  ],
  Total: {
    Price: String,
    Delivery: String,
  },
});

module.exports = mongoose.model(process.env.Collection2, orderSchema);
