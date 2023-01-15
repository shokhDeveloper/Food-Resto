import { NavLink, Route, Routes } from "react-router-dom"
import "./Dishes.css"
import { Hot } from "./Hot"
export const Dishes = () => {
    return(
        <>
            <ul className="dishes">
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"hot_dishes"}>Hot dashes</NavLink>
                </li>
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"cold_dishes"}>Cold Dishes</NavLink>
                </li>
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"soup"}>Soup</NavLink>
                </li>
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"grill"}>Grill</NavLink>
                </li>
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"appesitter"}>Appesitter</NavLink>
                </li>
                <li>
                    <NavLink className={(params) => params.isActive? "blocking": "nones"} to={"dassert"}>Dassert</NavLink>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route index element={<Hot/>}/>
                <Route path="/hot_dishes" element={<Hot/>}/>
                <Route path="/cold_dishes" element={<h1>Dishes</h1>}/>
                <Route path="/soup" element={<>Soup</>}/>
                <Route path="/grill" element={<>Grill</>}/>
                <Route path="/appesitter" element={<>Appesitter</>}/>
                <Route path="/dassert" element={<>Dassert</>}/>
            </Routes>
        </>
    )
}