import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Profile() {
  let { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "61d42dff81395d74a1d00055",
        },
      })
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.picture}
                  className="rounded-start"
                  alt="..."
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {user.title} {user.firstName} {user.lastName}
                  </h5>
                  <p className="card-text">{user.email}</p>
                  <p className="card-text">{user.phone}</p>
                  <p className="card-text">{user.dateOfBirth}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {user.registerDate}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
