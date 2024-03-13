import model from "../models/wishModel.js"

const GetAllWishRepo = async (email) => {
  return await model.find({email: email});
}

const GetWishRepo = async (id) => {
  return await model.findOne({ email: id });
}

const AddWishRepo = async (id, wishlist) => {
  let wsh = new model({
    email: id,
    wish: wishlist,
  });

  return await wsh.save();
}

const UpdateWishRepo = async (id, wishlist) => {
  let res = await model.findOne({ email: id });
  await model.updateOne(
    { email: id },
    {
      email: wishlist.email,
      wish: wishlist,
    }
  );
}

export {GetAllWishRepo, GetWishRepo, AddWishRepo, UpdateWishRepo };