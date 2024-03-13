import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
export default function Component2() {
  const [fruitname, setFruitname] = useState("");
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFruitname(e.target.value)}
        placeholder="Enter Fruit Name"
      />
      <button onClick={() => dispatch({ type: "ADD", payload: fruitname })}>
        Add
      </button>
    </div>
  );
}
