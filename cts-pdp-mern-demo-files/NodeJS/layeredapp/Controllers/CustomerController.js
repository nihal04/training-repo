const service = require("../Services/CustomerService");

async function GetCustomers(req, res) {
  res.status(200).send(await service.GetCustomers());
}

async function GetCustomer(req, res) {
  try {
    let result = await service.GetCustomer(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

async function AddCustomer(req, res) {
  try {
    await service.AddCustomer(req.body);
    res.status(201).send({ message: "Customer added successfully" });
  } catch (err) {
    res.status(409).send({status: 409, message: err.message});
  }
}

async function DeleteCustomer(req, res){
    try{
        await service.DeleteCustomer(req.params.id);
        res.status(200).send({ message: "Customer deleted successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

async function UpdateCustomer(req, res){
    try{
        await service.UpdateCustomer(req.params.id, req.body);
        res.status(200).send({ message: "Customer updated successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

module.exports = { GetCustomers, GetCustomer, AddCustomer, DeleteCustomer, UpdateCustomer };
