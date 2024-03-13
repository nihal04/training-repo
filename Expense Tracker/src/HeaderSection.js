function HeaderSection (props){
    
    return (
        <div>
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center">Expense Tracker</h2>
                <div className="text-center">
                   <h4>Your Balance</h4>
                   <h4>{props.netBal}</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;