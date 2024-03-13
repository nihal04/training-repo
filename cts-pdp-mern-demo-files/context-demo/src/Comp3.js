import React, {useContext} from "react";
import AppContext from "./AppContext";
export default function Comp3() {
    const context = useContext(AppContext);
  return (
    <div>
      <h3>This is Component 3</h3>
      {/* <Consumer>
        {(value) => <button onClick={value}>Click Here</button>}
      </Consumer> */}
      <h2>{context}</h2>
    </div>
  );
}
