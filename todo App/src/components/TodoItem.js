import React from "react";

const TodoItem = (props) => {
    
    const checkHandle = (ele)=>{
        fetch(`http://127.0.0.1:3000/todos/${ele.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: ele.id,
            text: ele.text,
            isCompleted: !props.ele.isCompleted,
        })
    }).then(res => res.json())
        .then(data => {
            props.setFlag(!props.flag);
        });
    }

    const deleteTask = (ele) => {
        fetch(`http://127.0.0.1:3000/todos/${ele.id}`,{
        method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        props.setFlag(!props.flag);
      })
    }
    
    return(
        <li className="list-group-item">
                    
                    <input className="form-check-input float-start" type="checkbox" value="" id="flexCheckChecked" checked={props.ele.isCompleted} onChange={()=>checkHandle(props.ele)}></input>
                    <label className="form-check-label" for="flexCheckChecked" style={{textDecoration:props.ele.isCompleted?"line-through":null, paddingLeft:"10px"}}>
                       {props.ele.text}
                    </label>
                    
                        <button type="button" className="btn btn-danger btn-sm float-end" onClick={()=>deleteTask(props.ele)}>X</button>
                   
                    
                </li>
    )
}

export default TodoItem;
