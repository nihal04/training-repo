import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function Component1() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <ul>
        {state.map((item) => (
          <li>
            {item}
            <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
