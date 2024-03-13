import React from 'react'
import UserData from './UserData'

function ListView(props) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <ul className="list-group">
                    {
                        props.users.map(item =><li className='list-group-item'>{item.firstName}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UserData(ListView);