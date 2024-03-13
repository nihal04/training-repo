// Default state object
const state = { Items: ["Meeting at 9:30 AM"] };

// Reducer
function reducer(initialState = state, action) {
  switch (action.type) {
    case "GET": {
      return initialState;
    }
    case "ADD":
      initialState.Items.push(action.payload);
      return state;
    case "REMOVE": {
      initialState.Items = initialState.Items.filter(
        (x) => x != action.payload
      );
      return state;
    }
    default:
      return initialState;
  }
}

// Create store
const store = Redux.createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Get the reference of todolist element
const todolist = document.getElementById("todoList");

// Subscribing the actions
store.subscribe(() => {
  const result = store.getState();
  todolist.innerHTML = "";
  result.Items.map((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${item} <button onclick="removeItem('${item}')" class='btn btn-danger btn-sm float-end'>X</button>`;
    todolist.appendChild(li);
  });
});

// Trigger Action
store.dispatch({ type: "GET" });

document.getElementById("btnAdd").addEventListener("click", () => {
  const item = document.getElementById("itemname").value;
  store.dispatch({ type: "ADD", payload: item });
});

function removeItem(item) {
  store.dispatch({ type: "REMOVE", payload: item });
}
