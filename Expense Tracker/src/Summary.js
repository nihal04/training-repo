function Summary (props){
    return (
        <div>
            <div className="col-md-8 offset-md-2">
           <div className="card shadow p-3 mb-5 bg-white rounded">
            <div style={{display:"flex"}}>
              <div className="card-body">
                <h5 style={{color:"green"}}>INCOME</h5>
                <h5 style={{color:"green"}}>{props.totalInc}</h5>
              </div>
              <div className="vr"></div>
              <div className="card-body">
                <h5 style={{color:"red"}}>EXPENSE</h5>
                <h5 style={{color:"red"}}>{props.totalExp}</h5>
              </div>
            </div>  
           </div>
        </div>
        </div>
    )
}

export default Summary;