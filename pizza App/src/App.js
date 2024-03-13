import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
//import Profile from "./Profile";
//import About from "./About";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [flag, setFlag] = useState(false);
  console.log("app called", cartData);
  console.log("token", localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Header cartData={cartData}/>
      <Routes>
        <Route path="/" element={<Home setCartData={setCartData}/>} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart flag={flag} setFlag={setFlag}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;