const service = require("../Services/BookService");

async function GetBooks(req, res) {
  res.status(200).send(await service.GetBooks());
}

async function GetBook(req, res) {
  try {
    let result = await service.GetBook(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

async function AddBook(req, res) {
  try {
    await service.AddBook(req.body);
    res.status(201).send({ message: "Book added successfully" });
  } catch (err) {
    res.status(409).send({status: 409, message: err.message});
  }
}

async function DeleteBook(req, res){
    try{
        await service.DeleteBook(req.params.id);
        res.status(200).send({ message: "Book deleted successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

async function UpdateBook(req, res){
    try{
        await service.UpdateBook(req.params.id, req.body);
        res.status(200).send({ message: "Book updated successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

async function Register(req, res) {
  res.render("register");
}

module.exports = { GetBooks, GetBook, AddBook, DeleteBook, UpdateBook, Register };