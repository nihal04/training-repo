import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";
import { initialState } from "./store";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS: {
      return state;
    }
    case ADD_ITEM: {
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.id != action.payload),
      };
    }
    default:{
        return state;
    }
  }
}
