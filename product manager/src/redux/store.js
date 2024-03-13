import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = {
  todoList: [
    {
      products:[]
    },
  ],
};

const store = createStore(reducer, initialState);
export default store;