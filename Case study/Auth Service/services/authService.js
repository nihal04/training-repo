import { GetAuthRepo } from "../repository/authRepository.js";

const loginSer = async (user) => {
    let usr = await GetAuthRepo(user.email);
    if (usr == null) {
        throw Error("Invalid Credentials");
    } else {
        return usr;
    }
}

export { loginSer };