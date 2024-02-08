import React, { useState } from "react"
import {BrowserRouter as BR, Route,Routes} from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import "../assets/css/mystyle.css"
import Edit from "./Edit"
import Search from "./Search"
import Signup from "./Signup"
import Login from "./Login"
import Profile from "./Profile"
import Forgetu from "./Forgetu"
import Forgeto from "./Forgeto"
import Forgetp from "./Forgetp"
import Updatepassword from "./Updatepassword"



function Main(){
    var [mode,setmode]=useState(0)
    function change(val){
        setmode(val)
    }
    return(
        <>
        <div className="container-fluid">
         <div className={mode?"bg-dark":"bg-light"}>
         <BR>
         <Navbar switch={change}/>
         <Routes>
            <Route path="/" element={<Home modes={mode}/>}/>
            <Route path="/edit/:id" element={<Edit modes={mode}/>}/>
            <Route path="/search/:value" element={<Search modes={mode}/>}/>
            <Route path="/add" element={<Signup modes={mode}/>}/>
            <Route path="/login" element={<Login modes={mode}/>}/>
            <Route path="/profile/:id" element={<Profile modes={mode}/>}/>
            <Route path="/forgetu" element={<Forgetu modes={mode}/>}/>
            <Route path="/forgeto" element={<Forgeto modes={mode}/>}/>
            <Route path="/forgetp" element={<Forgetp modes={mode}/>}/>
            <Route path="/changepassword" element={<Updatepassword modes={mode}/>}/>
         </Routes>
         </BR>
         </div>
         </div>
        </>
    )
}
export default Main