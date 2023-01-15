import { Link, NavLink, Route, Routes } from "react-router-dom"
import { About } from "../About"
import "./Header.css"
export const Header = () => {
    return(
        <>
            <header>
                <div className="container">
                    <nav className="nav">
                        <Link className="logo" style={{color: "black"}} to={"/"}>
                            Foor Resto
                        </Link>
                        <ul className="nav__ul">
                            <li>
                                <NavLink className={(params) => params.isActive?"orange":"blacks" } to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"about"} className={(params) => params.isActive?"orange":"blacks" } >About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"login"} className={(params) => params.isActive?"orange":"blacks" } >Login</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route index element={<>
                <div className="container">
                <div className="home" style={{display: "flex", alignItems: "center", minHeight: "80vh", justifyContent: "center"}}>
                <h2 style={{color: "#EA7C69", fontSize: "40px"}}>Welcome the Food resto platform</h2>
                </div>
                </div>
                </>}/>
                <Route path="about/*" element={<About/>}/>
            </Routes>
        </>
    )
}
