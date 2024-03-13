import React from "react";
import { useDispatch } from "react-redux";
import { appActions, getUsers } from "./redux/appSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');

  function loginUser(){
    dispatch(appActions.login(username));
    dispatch(getUsers());
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={loginUser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
