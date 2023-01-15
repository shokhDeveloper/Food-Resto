import { Cards } from "../Cards"
import { Dashboard } from "../Dashboard"

export const Header = ( ) => {
    return(
        <div style={{width: "100%"}}>
        <header style={{background: "transparent", width: "100%"}}>
            <nav className="soat_nav" style={{width: "100%"}}>
                <div className="soat_nav_logo" style={{padding: "0rem 1rem", color: "#fff"}}>
                <h1 style={{fontSize: "30px", padding: "0.5rem 0rem"}}>Dashboard</h1>
                <h4 style={{letterSpacing: "1px", opacity: ".3"}}>
                Tuesday 2 Feb, 2021
                </h4>
                </div>
            </nav>
        </header>
        <div className="border" style={{width: "98%"}}>
            <hr />
        </div>
        <Cards/>
        <Dashboard/>
        </div>

    )
}