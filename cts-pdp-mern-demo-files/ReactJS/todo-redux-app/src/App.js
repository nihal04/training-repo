import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <TodoForm />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
