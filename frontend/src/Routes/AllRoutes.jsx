import React , {useState, useEffect}from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Login from "../components/SignIn/Login";
import Home from "../components/Home/Home";
import Register from "../components/SignUp/Register";
import Profile from "../components/Profile/Profile";
import Bus from "../components/Bus_List/Bus";
import LandingPage from "../components/Landing_Page/LandingPage";
import SeatSelection from "../components/Seat_Seslection/SeatSelection";
import Ticket from "../components/Ticket/Ticket";
import Dropdown from "../components/Dropdown/Dropdown"; 
import {createContext} from "react";
import { lookInSession } from "../common/session";

export const UserContext = createContext({}) 



const AllRoutes = () => {
  const [userAuth, setUserAuth] = useState({});
  useEffect(()=>{
    let userInSession = lookInSession("user");
    userInSession ? setUserAuth(userInSession): setUserAuth({token:null})
  }, [])

  return (
    <UserContext.Provider value = {{userAuth, setUserAuth}}>
    <Routes>
      <Route path='/' element={<LandingPage/>} > </Route>
      <Route path='/Home' element={<Home/>} > </Route>
      <Route path='/Login' element={<Login/>} > </Route>
      <Route path='/Register' element={<Register/>} > </Route>
      <Route path='/Profile' element={<Profile/>} > </Route>
      <Route path='/Bus' element={<Bus/>} > </Route>
      <Route path='/SeatSelection' element={<SeatSelection/>} > </Route>
      <Route path='/Ticket' element={<Ticket/>} > </Route>
    </Routes>
    </UserContext.Provider>
  );
};

export default AllRoutes;
