import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function Header(props) {
  const navigate = useNavigate();
  const [ren, setRen] = useState(false);
  const favList = useSelector((state)=> state.app.wishData) || [];
  let count  = favList.length!==0?(favList[0].wish).length:0;
  //const [count, setCount] = useState(0);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/Cart")
//       .then((res) => {
//         let arr = res.data;
//         setCount(arr.length);
//       });
//   }, [props]);

const [anchorEl, setAnchorEl] = useState(null);

const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  navigate("/");
}
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar border-bottom border-body" style={{backgroundColor:"brown"}}>
        <Link className="navbar-brand" to="/result" >
          <img src="images/icons8-movie-camera-96.png" width="70" height="50" style={{marginLeft:"15px", marginBottom:"12px"}}/>
          <a _ngcontent-xul-c45 href="#" className="navbar-brand fs-2 brand-text fw-bold">
            <span _ngcontent-xul-c45 className="text-warning">Movie</span>
            <span _ngcontent-xul-c45 className="text-red" style={{color:"black"}}>App</span>
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
            {localStorage.getItem("email")!==null?(<div style={{paddingTop:"20px", display:"flex"}}>
                <h5 style={{fontWeight:"700"}}>Welcome ,</h5>
                <h5 style={{color:"orange"}}>{(localStorage.getItem("email")).split("@")[0]}</h5>
              </div>):(
                <div></div>
              )}
            </li>
            
            <li>
            {localStorage.getItem("email")!==null?(<div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{marginTop:"10px", paddingRight:"50px", color:"white"}}
                title="Account"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>navigate("/profile")}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>):(<div></div>)}
            </li>
            {localStorage.getItem("email")!==null?(<li className="nav-item">
              <Link className="nav-link" to="/favourite">
              <a _ngcontent-xul-c45 href="#" className="navbar-brand fs-2 brand-text fw-bold" title="Favourites">
                 
                 <Badge badgeContent={count} color="primary">
                      <img src="images/icons8-wishlist-64.png" width="50" height="50" />
                  </Badge>
              </a>
              </Link>
            </li>):(<div></div>)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
