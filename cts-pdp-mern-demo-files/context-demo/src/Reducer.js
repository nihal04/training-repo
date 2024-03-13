const initialState = ["Apple", "Banana"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      return state.filter((x) => x != action.payload);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
export { initialState };
