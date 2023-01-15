import { NavLink, Route, Routes } from "react-router-dom"
import "./Dashboard_Header.css"
import { Home } from "./Home"
export const Dashboard_Header  = () => {
    return(
        <div className="dashboard_header">
            <ul style={{paddingTop: "1rem", display: "flex", justifyContent: "space-evenly", listStyleType: "none" }}>
            <li>
                <NavLink to={"customer"}>Customer</NavLink>
            </li>
            <li>
                <NavLink to={"menu"}>Menu</NavLink>
            </li>
            <li>
                <NavLink to={"total"}>Total Payment</NavLink>
            </li>
            <li>
                <NavLink to={"status"}>Status</NavLink>
            </li>
        </ul>
        <div className="los" style={{width: "90%", margin: "0 auto"}}>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/customer" element={<Home/>}/>
            <Route path="/menu" element={<><h1>Menu</h1></>}/>
            <Route path="/total" element={<><h1>Total</h1></>}/>
            <Route path="/status" element={<><h1>Status</h1></>}/>
        </Routes>
        </div>
        </div>
        
    )
}