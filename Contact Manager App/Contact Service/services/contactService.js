import { GetContactsRepo, GetContactRepo, AddContactRepo, DeleteContactRepo, UpdateContactRepo } from "../repository/contactRepository.js"

const GetContactsSer = async () => {
  return await GetContactsRepo();
}

const GetContactSer = async (id) => {
  let res = await GetContactRepo(id);
  if (res == null) {
    throw Error(`Contact with id: ${id} does not exists`);
  } else {
    return res;
  }
}

const AddContactSer = async (contact) => {
  let res = await GetContactRepo(contact.id);
  if (res != null) {
    throw Error(
      `Contact with id: ${contact.id} already exists`
    );
  } else {
    await AddContactRepo(contact);
  }
}

const DeleteContactSer = async (id) => {
  let res = await GetContactRepo(id);
  if (res == null) {
    throw Error(`Contact with id: ${id} does not exists`);
  } else {
    await DeleteContactRepo(id);
  }
}

const UpdateContactSer = async (id, contact) => {
  let res = await GetContactRepo(id);
  if (res == null) {
    throw Error(`Contact with id: ${id} does not exists`);
  } else {
    await UpdateContactRepo(id, contact);
  }
}

export { GetContactsSer, GetContactSer, AddContactSer, DeleteContactSer, UpdateContactSer };