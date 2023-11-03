import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import Profile from "../components/Profile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/Home' element={<Home/>} > </Route>
      <Route path='/Login' element={<Login/>} > </Route>
      <Route path='/Register' element={<Register/>} > </Route>
      <Route path='/Profile' element={<Profile/>} > </Route>
    </Routes>
  );
};

export default AllRoutes;
