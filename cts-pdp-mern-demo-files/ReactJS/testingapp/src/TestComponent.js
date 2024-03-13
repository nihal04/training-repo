import React, { useRef } from "react";

export default function TestComponent() {
  const inputRef = useRef(null);
  function Display(){
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={Display}>Click Here</button>
    </div>
  );
}
