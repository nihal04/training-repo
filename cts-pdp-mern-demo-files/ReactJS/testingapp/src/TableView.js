import React from 'react'
import UserData from './UserData'

function TableView(props) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map(item =><tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserData(TableView);