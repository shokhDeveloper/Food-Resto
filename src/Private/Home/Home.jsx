import { RoutesX } from "../../RoutesX"
import { Siderbar } from "../Siderbar"

export const Home = () => {
    return(
        <div className="home" style={{display: "flex"}}>
           <Siderbar/>
           <RoutesX/>
        </div>
    )
}