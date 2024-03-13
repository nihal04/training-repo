import React, { forwardRef, useRef, useImperativeHandle } from "react";

export const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, ()=>({
    getValue: ()=>{
        console.log(inputRef.current.value);
    },
    name: "Dhiraj"
  }));
  return <input ref={inputRef} />;
});
