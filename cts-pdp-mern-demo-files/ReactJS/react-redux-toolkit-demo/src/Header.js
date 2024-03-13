import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { appActions } from "./redux/appSlice";
export default function Header() {
  const loginStatus = useSelector((state) => state.app.isLoggedIn);
  const username = useSelector((state)=> state.app.username);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          {loginStatus ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Welcome {username}
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => dispatch(appActions.logout())}
                  className="nav-link"
                  href="#"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Welcome {username}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
