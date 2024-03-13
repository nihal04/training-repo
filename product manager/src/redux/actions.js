import { GET_ITEMS, GET_ITEM } from "./types";
import axios from "axios";

const fetchDetails = async() =>{
    await axios
          .get("https://dummyjson.com/products")
          .then((res) => {
            console.log(res);
            return res.data.products;
            // setData(res.data.products);
            });
}

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const getItem = () => {
    return {
      type: GET_ITEM,
    };
  };

// export const deleteItem = (id) => {
//   return {
//     type: DELETE_ITEM,
//     payload: id,
//   };
// };

// export const addItem = (item) => {
//   return {
//     type: ADD_ITEM,
//     payload: item,
//   };
// };
