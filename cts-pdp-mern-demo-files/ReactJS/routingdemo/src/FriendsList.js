import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function FriendsList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?limit=30", {
        headers: {
          "app-id": "61d42dff81395d74a1d00055",
        },
      })
      .then((res) => setUsers(res.data.data));
  }, []);

  return (
    <div className="container mt-2">
      <div className="row">
        {users.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card mb-3">
              <img src={item.picture} className="card-img-top" alt="user" />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title} {item.firstName} {item.lastName}
                </h5>
                <Link to={`/profile/${item.id}`} className="btn btn-primary">
                  See Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
