import Shurva_Mini from "../../assets/images/shurva_minig.png"   
import Lagmon_mini from "../../assets/images/lagmoncha.png"
import Barak_Mini from "../../assets/images/barak_mini.png"
import "./Sidebar.css"
import { Chart } from "./Charts"
export const Sidebar = () => {
    return(
        <div className="siderbar_dashboard">
            <div className="sidebar_soat">
                <div className="sidebar_1">
                    <div className="sidebar_1_text">
                        <h2 style={{fontSize: "23px"}}>Most Ordered</h2>
                        <select style={{background: "transparent", padding: "0.5rem 1rem " }}>
                            <option value="today">Today</option>
                        </select>   
                    </div>     
                        
                </div>
                <div className="sidebar_1_align">
                        <div className="sidebar_align_card">
                            <img src={Shurva_Mini} alt="" />
                            <div className="sidebar_align_card_text">
                            <h5>Spicy seasoned seafood noodles</h5>
                            <p style={{color: "#fff", opacity: ".3", fontSize: "14px"}}><span>200 dishes ordered</span></p>
                            </div>
                        </div>
                        <div className="sidebar_align_card">
                            <img src={Lagmon_mini} alt="" />
                            <div className="sidebar_align_card_text">
                            <h5>Spicy seasoned seafood noodles</h5>
                            <p style={{color: "#fff", opacity: ".3", fontSize: "14px"}}><span>200 dishes ordered</span></p>
                            </div>
                        </div>
                        <div className="sidebar_align_card">
                            <img src={Barak_Mini} alt="" />
                            <div className="sidebar_align_card_text">
                            <h5>Spicy seasoned seafood noodles</h5>
                            <p style={{color: "#fff", opacity: ".3", fontSize: "14px"}}><span>200 dishes ordered</span></p>
                            </div>
                        </div>
                    </div>
                    <button style={{width: "100%", padding: "0.5rem 1rem", fontSize: "16px", background: "transparent", color: "var(--orange)", border: "1px solid var(--orange)", borderRadius: "10px"}}>View All</button>
                </div>
                <div style={{width: "100%" , borderRadius: "20px"}} className="sidebar_dashboard_2">
                    <div className="sidebar_dashboard_2_align">
                        <h2 style={{fontSize: "20px"}}>Most Type of Order</h2>
                        <select>
                            <option value="Today" selected disabled>Today</option>
                        </select>
                    </div>
                    <div style={{width: "100%"}} className="border">
                        <hr />
                    </div>
                    <div className="charts" style={{display : "flex", alignItems: "Center", justifyContent: "space-between"}}>
                        <div className="chart">
                            <Chart/>
                        </div>
                        <div className="text" style={{width:"100px",display: "flex", justifyContent: "space-around", flexDirection: "column", height: "200px", margin:"1rem"}}>
                        <div className="chart_text" style={{display : "flex", alignItems: "Center"}}>
                        <div className="radial" style={{width: "20px", height: "15px", background: "#FF7CA3", borderRadius: "10px", margin: "0.3rem"}}></div>
                        <h3> Dine In</h3>
                       
                        </div>
                        <div className="chart_text" style={{display : "flex", alignItems: "Center"}}>
                        <div className="radial" style={{width: "20px", height: "15px", background: "#FFB572", borderRadius: "10px", margin: "0.3rem"}}></div>
                        <h3>To Go</h3>
                        </div>
                        <div className="chart_text" style={{display : "flex", alignItems: "Center"}}>
                        <div className="radial" style={{width: "20px", height: "15px", background: "#65B0F6", borderRadius: "10px", margin: "0.3rem"}}></div>
                        <h3>Delivery</h3>
                        </div>
 
                        </div>
                       </div>
                </div>             
        </div>
    )
}