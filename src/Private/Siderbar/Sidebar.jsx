import "./Sidebar.css"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/images/Logo.png"
import Frame from "../../assets/images/Vector.png"
import Bolt from "../../assets/images/bolt.png"
import Soat from "../../assets/images/Soat.png"
import Sms from "../../assets/images/sms.png"
import Message from "../../assets/images/Message.png"
import Settings from "../../assets/images/Settings.png"
import Logout from "../../assets/images/Logout.png"
import { useContext, useState } from "react"
import { Context } from "../../Context"
export const Siderbar = () => {
    const {setToken} = useContext(Context) 
    function handleClick(event){
        window.localStorage.clear()
        setToken(null)
    }
    return(
        <div className="side">
            <NavLink> <img src={Logo} alt="" /> </NavLink>   
            <NavLink to={"/home"} id="page" className={(params) => params.isActive? "block": "false" }> <img src={Frame} alt="" /> </NavLink>      
            <NavLink to={"/bolt"} id="page" className={(params) => params.isActive? "block": "false" }> <img src={Bolt} alt="" /> </NavLink>
            <NavLink id="page" className={(params) => params.isActive? "block": "false" } to={"/soat"}> <img src={Soat} alt="" /></NavLink>
            <NavLink id="page" className={(params) => params.isActive? "block": "false" } to={"/sms"}> <img src={Sms} alt="" /></NavLink>
            <NavLink id="page" className={(params) => params.isActive? "block": "false" } to={"/message"}> <img src={Message} alt="" /></NavLink>
            <NavLink id="page" className={(params) => params.isActive? "block": "false" } to={"/settings"}> <img src={Settings} alt="" /></NavLink>
            <NavLink onClick={handleClick} id="page" className={(params) => params.isActive? "block": "false" } to={"/logout"}> <img src={Logout} alt="" /></NavLink>
        </div>
    )
}