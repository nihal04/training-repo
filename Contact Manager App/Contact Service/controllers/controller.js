import { GetContactsSer, GetContactSer, AddContactSer, DeleteContactSer, UpdateContactSer } from "../services/contactService.js"

const GetContacts = async (req, res) => {
  res.status(200).send(await GetContactsSer());
}

const GetContact = async (req, res) => {
  try {
    let result = await GetContactSer(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

const AddContact = async (req, res) => {
    await AddContactSer(req.body);
    res.status(201).send({ message: "Contact added successfully" });
  // try {
  //   await AddContactSer(req.body);
  //   res.status(201).send({ message: "Contact added successfully" });
  // } catch (err) {
  //   res.status(409).send({status: 409, message: err.message});
  // }
}

const DeleteContact = async (req, res) => {
    try{
        await DeleteContactSer(req.params.id);
        res.status(200).send({ message: "Contact deleted successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

const UpdateContact = async (req, res) => {
    try{
        await UpdateContactSer(req.params.id, req.body);
        res.status(200).send({ message: "Contact updated successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

export { GetContact, GetContacts, AddContact, DeleteContact, UpdateContact };