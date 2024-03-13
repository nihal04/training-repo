const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerid: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema, "Customers");
