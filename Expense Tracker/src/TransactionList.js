import axios from "axios";
import moment from "moment";

function TransactionList (props){
    const deleteExpense  = (id)=>{
        axios.delete(`http://localhost:3000/expense/${id}`).then(res => {
        props.setRen(!props.ren);
    });
    }
    return (
        <div>
            <div className="col-md-8 offset-md-2">
             <div className="card shadow p-1 mb-3 bg-white rounded" style={{marginTop:"25px"}}>
              <div className="card-body" style={{padding:"3px"}}>
                  <div style={{display:"flex"}}>
                     <div style={{width:"15%"}}>
                        <div className="calStyle" style={{backgroundColor:"lightblue", textAlign:"center"}}>{moment(props.item.date).format('DD')}</div>
                        <div style={{backgroundColor:"skyblue", textAlign:"center"}}>{moment(props.item.date).format('MMM')}</div>
                     </div>
                  <div style={{paddingLeft:"20px", paddingTop:"10px", fontWeight:"500"}}>{props.item.description}</div>
                  {props.item.expType === "Income"? (<div style={{paddingLeft:"30px", paddingTop:"10px", fontWeight:"500"}}>{`+ ${props.item.amount}`}</div>):(<div style={{paddingLeft:"28px", paddingTop:"10px", fontWeight:"500"}}>{`- ${props.item.amount}`}</div>)}
                  
                
                  <a className="icon-link" href="#" style={{marginLeft:"125px", color:"red", fontWeight:"bold"}} onClick={()=>deleteExpense(props.item.id)}>X</a>
                </div>
              </div>
           </div>
        </div>
        </div>
    )
}

export default TransactionList;