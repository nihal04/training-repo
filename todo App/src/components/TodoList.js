import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const [listData, setListData] = useState([]);
    const [flag, setFlag] = useState(false);
    
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/todos')
        .then(res => res.json())
        .then(data => {
            setListData(data);
        });
    },[props, flag])

    
    return(
        <div style={{marginLeft:"670px", marginTop:"80px"}}>
            <div style={{width:"40%", paddingTop:"10px"}}>
              <ul className="list-group">
                {
                listData.map((ele, i)=><TodoItem ele={ele} key={i} flag={flag} setFlag={setFlag}/>)
                }
             </ul>
          </div>
        </div>
    )
}

export default TodoList;
