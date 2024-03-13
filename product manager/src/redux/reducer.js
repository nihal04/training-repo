import { GET_ITEMS, GET_ITEM } from "./types";
import { initialState } from "./store";


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS: {
      return state;
    }
    case GET_ITEM: {
        return state;
      }
    default:{
        return state;
    }
  }
}
