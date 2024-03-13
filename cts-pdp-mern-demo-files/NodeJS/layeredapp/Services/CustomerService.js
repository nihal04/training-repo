const repo = require("../Repository/CustomerRepository");

async function GetCustomers() {
  return await repo.GetCustomers();
}

async function GetCustomer(id) {
  let res = await repo.GetCustomer(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    return res;
  }
}

async function AddCustomer(customer) {
  let res = await repo.GetCustomer(customer.customerid);
  if (res != null) {
    throw Error(
      `Customer with customer id: ${customer.customerid} already exists`
    );
  } else {
    await repo.AddCustomer(customer);
  }
}

async function DeleteCustomer(id) {
  let res = await repo.GetCustomer(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    await repo.DeleteCustomer(id);
  }
}

async function UpdateCustomer(id, customer) {
  let res = await repo.GetCustomer(id);
  if (res == null) {
    throw Error(`Customer with customer id: ${id} does not exists`);
  } else {
    await repo.UpdateCustomer(id, customer);
  }
}

module.exports = { GetCustomers, GetCustomer, AddCustomer, DeleteCustomer, UpdateCustomer };
