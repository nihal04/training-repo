import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = {
  todoList: [
    {
      id: 1,
      text: "Meeting at 9:30 AM",
    },
  ],
};

const store = createStore(reducer, initialState);
export default store;