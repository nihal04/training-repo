import React, { useRef } from "react";
import { ChildComponent } from "./ChildComponent";

export default function ParentComponent() {
  const childRef = useRef(null);
  function handleClick(){
    childRef.current.getValue();
  }
  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
