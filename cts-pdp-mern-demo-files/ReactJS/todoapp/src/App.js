import { useState } from "react";
function App() {
  const [todoitem, setTodoitem] = useState("");
  const [todos, setTodos] = useState([]);
  // function getValue(e){
  //   setTodoitem(e.target.value);
  // }

  function addItem() {
    setTodos([...todos, todoitem]);
  }

  function deleteItem(item) {
    let items = todos.filter((x) => x !== item);
    setTodos(items);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2 className="text-center">Todo App</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter some text"
              onChange={(e) => setTodoitem(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={addItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <ul className="list-group">
            {todos.map((item) => (
              <li className="list-group-item">
                {item}
                <button className="btn btn-danger btn-sm float-end" onClick={deleteItem.bind(this, item)}>X</button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
