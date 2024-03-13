import React, { useState } from "react";

const TodoForm = (props) => {
    const [value, setValue] = useState("");

    const addTask = () => {
        if(value !== ""){
        fetch('http://127.0.0.1:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: value,
                isCompleted: false,
            })
        }).then(res => res.json())
            .then(data => {
                setValue("");
                props.setRen(!props.ren);
            });
        }    
    }
    
    
    return(
        <div>
            <div className="modal-container" style={{width:"30%", position:"absolute", left:"35%"}}>
                 <div className="input-group mb-3">
                   <input type="text" className="form-control" value={value} placeholder="Task details" onChange={(e)=>setValue(e.target.value)}/>
                 <div className="input-group-append">
                 <button className="btn btn-primary" type="button" onClick={addTask}>Button</button>
                </div>
               </div>
            </div>
        </div>
    )
}

export default TodoForm;
