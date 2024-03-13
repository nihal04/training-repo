const Customer = require("../models/Customer");
// const {v4: uuidv4} = require('uuid');

async function GetCustomers() {
  return await Customer.find({});
}

async function GetCustomer(id) {
  return await Customer.findOne({ customerid: id });
}

async function AddCustomer(customer) {
  let cust = new Customer({
    // _id: uuidv4(),
    customerid: customer.customerid,
    firstname: customer.firstname,
    lastname: customer.lastname,
    email: customer.email,
    city: customer.city,
    age: customer.age,
  });

  return await cust.save();
}

async function DeleteCustomer(id) {
  await Customer.deleteOne({ customerid: id });
}

async function UpdateCustomer(id, customer) {
  await Customer.updateOne(
    { customerid: id },
    {
      firstname: customer.firstname,
      lastname: customer.lastname,
      email: customer.email,
      city: customer.city,
      age: customer.age,
    }
  );
}

module.exports = { GetCustomers, GetCustomer, AddCustomer, DeleteCustomer, UpdateCustomer };
