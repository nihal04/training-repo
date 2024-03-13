import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Cart")
      .then((res) => {
        let arr = res.data;
        setCount(arr.length);
      });
  }, [props]);
  
  const handleSelect = (e) =>{
    if(e.target.value === "1"){
      navigate("/login");
    } else if(e.target.value === "2"){
      localStorage.removeItem("token");
      navigate("/login");
    } 
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar bg-dark border-bottom border-body">
        <Link className="navbar-brand" to="/">
          <img src="images/pizza-icon.png" width="70" height="50" />
          <a _ngcontent-xul-c45 href="#" className="navbar-brand fs-2 brand-text fw-bold">
            <span _ngcontent-xul-c45 className="text-warning">Hot</span>
            <span _ngcontent-xul-c45 className="text-white">Pizza</span>
          </a>
        </Link>
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
          <ul className="navbar-nav ms-auto">
            
            <li>
            <select className="form-select mt-3" onChange={(e)=>handleSelect(e)} aria-label="Default select example" style={{backgroundColor:"#FFC300", fontWeight:"500"}}>
                <option selected>Account</option>
                <option value="1">Login</option>
                <option value="2">Logout</option>
            </select>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <img src="images/icons8-shopping-cart-64.png" width="50" height="50" />
              <span _ngcontent-xul-c45 class="badge rounded-pill text-dark bg-light float-end align-top">{count}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
