import {GetAllWishRepo, GetWishRepo, AddWishRepo, UpdateWishRepo } from "../repository/wishRepository.js";

const GetAllWishSer = async (email) => {
  let res = await GetAllWishRepo(email);
  if (res == null) {
    throw Error(`Wishlist does not exists`);
  } else {
    return res;
  }
}

const AddWishSer = async (id, wishlist) => {
    await AddWishRepo(id, wishlist);
}

const UpdateWishSer = async (id, wishlist) => {
  let res = await GetWishRepo(id);
  if (res == null) {
    throw Error(`Wishlist does not exists`);
  } else {
    await UpdateWishRepo(id, wishlist);
  }
}

export { AddWishSer, UpdateWishSer, GetAllWishSer };