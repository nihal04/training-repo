import Comp1 from "./Comp1";
import { Provider } from "./AppContext";
import Component1 from "./Component1";
import Component2 from "./Component2";
import reducer, { initialState } from "./Reducer";
import { useReducer } from "react";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // function AppComponentFunction() {
  //   console.log("Hello from App Component");
  // }
  return (
    // <div style={{ border: "2px solid black" }}>
    //   <h3>This is App Component</h3>
    //   <Provider value="Dhiraj">
    //     <Comp1 />
    //   </Provider>
    // </div>
    <div>
      <Provider value={{state, dispatch}}>
        <Component1 />
        <Component2 />
      </Provider>
    </div>
  );
}

export default App;
