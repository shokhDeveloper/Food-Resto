import "./Header.css"
import {SearchOutlined} from "@ant-design/icons"
import { Routes } from "react-router"
import { Dishes } from "./Dishes"
export const Header = () => {
    return(
        <div style={{width: "100%"}}>
        <header style={{background: "#1d1d2c", padding: "0.3rem", }}>
            <nav className="nav">
                <div className="logo">
                    <h3>Jaegar Resto</h3>
                    <p><span style={{opacity: ".3"}}>Tuesday, 2 Feb 2021</span></p>
                </div>
                <div className="search">
                <SearchOutlined style={{color: "#fff", fontSize: "20px"}}/>
                <input type="text" placeholder="Search for food, coffe, etc.." />
                </div>
            </nav>
        </header>
        <Dishes/>
        </div>
    )
}