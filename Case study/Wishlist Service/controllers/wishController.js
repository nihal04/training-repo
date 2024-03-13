import { AddWishSer, UpdateWishSer, GetAllWishSer } from "../services/wishService.js";

// const GetContacts = async (req, res) => {
//   res.status(200).send(await GetContactsSer());
// }

const GetAllWishlist = async (req, res) => {
  try {
    let result = await GetAllWishSer(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

const AddWishlist = async (req, res) => {
    await AddWishSer(req.params.id, req.body);
    res.status(201).send({ message: "Wishlist added successfully" });
  // try {
  //   await AddContactSer(req.body);
  //   res.status(201).send({ message: "Contact added successfully" });
  // } catch (err) {
  //   res.status(409).send({status: 409, message: err.message});
  // }
}

const UpdateWishlist = async (req, res) => {
    try{
        await UpdateWishSer(req.params.id, req.body);
        res.status(200).send({ message: "Wishlist updated successfully" });
    }catch(err){
        res.status(404).send({status: 404, message: err.message});
    }
}

export { AddWishlist, UpdateWishlist, GetAllWishlist };