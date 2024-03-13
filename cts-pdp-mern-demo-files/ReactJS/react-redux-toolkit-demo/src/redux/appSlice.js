import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoggedIn: false,
  username: "Anonymous",
  users: {}
};

export const getUsers = createAsyncThunk("app/user", async (data) => {
  return await axios
    .get("http://dummyjson.com/users?limit=1")
    .then((res) => res.data);
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "Guest";
      state.users={};
    }
    // getdata: (state, action)=>{
    //     if(getUsers.fulfilled){
    //         state.users = getUsers.;
    //     }
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
  }
});

const appActions = appSlice.actions;

export default appSlice.reducer;
export { appActions };
