import { Header } from "../Header"
import { Sidebar } from "../Sidebar"

export const Home = () => {
    return(
        <div className="soat" style={{width: "100%", display: "flex"}}>
            <Header/>
            <Sidebar/>           
        </div>
    )
}