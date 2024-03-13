import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { boolean } from "yup";
const initialState = {
   viewId: "",
   movieName: "",
   wishData: {},
   profileData: {},
};

// export const getProducts = createAsyncThunk("app/user", async (data) => {
//   return await axios
//     .get("https://dummyjson.com/products")
//     .then((res) => res.data);
// });

export const getWishlist = createAsyncThunk("app/user", async () => {
    //console.log("email", email, token);
    return await axios
      .get(`http://localhost:9000/wishlist/movie/${localStorage.getItem("email")}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data);
  });

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    view: (state, action) => {
      state.viewId = action.payload;
    },
    getMovie: (state, action) => {
      state.movieName = action.payload;
    },
    getProfile: (state, action) => {
      state.profileData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWishlist.fulfilled, (state, action) => {
      state.wishData = action.payload;
    })
  }
//   extraReducers: (builder) => {
//     builder.addCase(getProduct.fulfilled, (state, action) => {
//       state.product = action.payload;
//     })
//   }
});

const appActions = appSlice.actions;

export default appSlice.reducer;
export { appActions };
