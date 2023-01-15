import Filter from "../../assets/images/Filter.png"
import { Dashboard_Header } from "./Dashboard_Header"
import "./Dashboard.css"
export const Dashboard = () => {
    return(
        <div style={{width: "90%", margin: "0 auto", background: " rgba(0, 0, 0, 0.493)", borderRadius: "20px"}} className="dashboard">
            <div className="dash">
                <div className="dash_text">
                    <h3>Order Report</h3>
                    <button style={{background: "transparent"}}> <img src={Filter} alt="" /> Filter Order</button>
                </div>
            </div>
            <Dashboard_Header/>
        </div>
    )
}