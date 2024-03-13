import model from "../models/model.js"

const GetContactsRepo = async () => {
  return await model.find({});
}

const GetContactRepo = async (id) => {
  return await model.findOne({ id: id });
}

const AddContactRepo = async (contact) => {
  let cnt = new model({
    id: contact.id,
    email: contact.email,
    // password: contact.password,
    firstname: contact.firstname,
    lastname: contact.lastname,
    phonenumber: contact.phonenumber,
    age: contact.age,
    city: contact.city,
  });

  return await cnt.save();
}

const DeleteContactRepo = async (id) => {
  await model.deleteOne({ id: id });
}

const UpdateContactRepo = async (id, contact) => {
  await model.updateOne(
    { id: id },
    {
        id: contact.id,
        email: contact.email,
        firstname: contact.password,
        lastname: contact.lastname,
        phonenumber: contact.phonenumber,
        age: contact.age,
        city: contact.city,
    }
  );
}

export { GetContactsRepo, GetContactRepo, AddContactRepo, DeleteContactRepo, UpdateContactRepo };