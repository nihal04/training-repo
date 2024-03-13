import { GetUserRepo, AddUserRepo, UpdateUserRepo } from "../repository/userRepository.js";


const GetUserSer = async (email) => {
  let res = await GetUserRepo(email);
  if (res == null) {
    throw Error(`User with email: ${email} does not exists`);
  } else {
    return res;
  }
}

const AddUserSer = async (user) => {
  let res = await GetUserRepo(user.email);
  if (res != null) {
    throw Error(
      `User with email: ${user.email} already exists`
    );
  } else {
    let usr = await AddUserRepo(user);
    return usr;
  }
}


const UpdateUserSer = async (user) => {
  let res = await GetUserRepo(user.email);
  if (res == null) {
    throw Error(`User with email: ${user.email} does not exists`);
  } else {
    await UpdateUserRepo(user);
  }
}

export { GetUserSer, AddUserSer, UpdateUserSer };