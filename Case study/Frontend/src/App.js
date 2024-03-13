import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
//import Cart from "./Cart";
//import Profile from "./Profile";
//import About from "./About";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import Home from "./components/Home";
import Registration from "./components/Registration";
import View from "./components/View";
import Favourite from "./components/Favourite";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
         <Route element={<ProtectedRoute />}>
              <Route path="/result" element={<SearchResult />} />
              <Route path="/view" element={<View />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/updateprofile" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;