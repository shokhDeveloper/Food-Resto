import { Sidebar_2 } from "../SideBar_2"
import { Header } from "./Header"

export const Home = () => {
    return(
        <div style={{width: "100%"}}>
           <div className="align" style={{display: "flex"}}>
           <Header/>
           <Sidebar_2/>
           </div>
        </div>
    )
}