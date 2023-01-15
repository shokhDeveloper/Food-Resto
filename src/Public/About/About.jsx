import { NavLink, Route, Routes } from "react-router-dom"
import shurva from  "../../assets/images/shurva.png"
import lagmon from "../../assets/images/lagmon.png"
import barak from "../../assets/images/barak.png"
import tuxum from "../../assets/images/tuxum.png"
import ut from "../../assets/images/ut.png"
import rolton from "../../assets/images/rolton.png"
import "./About.css"
export const About = () => {
    return(
        <>
        <div className="about">
            <div className="container">
            <h2>Food Resto</h2>
                <ul className="about_ul">
                    <li>
                        <NavLink to={"hot"} className={(params) => params.isActive? "grey": "black"}>Hot dished</NavLink>
                    </li>
                    <li>
                        <NavLink to={"gold"} className={(params) => params.isActive? "grey": "black"}>Gold Dishes</NavLink>
                    </li>
                    <li>
                        <NavLink to={"soub"} className={(params) => params.isActive? "grey": "black"}>Soub</NavLink>
                    </li>
                    <li>
                        <NavLink to={"grill"} className={(params) => params.isActive? "grey": "black"}>Grill</NavLink>
                    </li>
                    <li>
                        <NavLink to={"appezitter"} className={(params) => params.isActive? "grey": "black"}>Appetizer</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <Routes>
            <Route index element={<>
            <div className="container">
            <div className="cards">
                <div className="card">
                    <img src={shurva} alt="" />
                    <div className="card-text">
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                    <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img src={lagmon} alt="" />
                    <div className="card-text">
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                    <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                    </div>
                </div>
            </div>
            </div>

            </>}/>
            <Route path="hot" element={
                <>
                <div className="container">
                <div className="cards">
                    <div className="card">
                        <img src={shurva} alt="" />
                        <div className="card-text">
                        <h2>Spicy seasoned seafood noodles</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                        <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={lagmon} alt="" />
                        <div className="card-text">
                        <h2>Salted Pasta with mushroom sauce</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                        <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                        </div>
                    </div>
                </div>
                </div>
    
                </>
            }/>
            <Route path="gold" element={
                <>
                <div className="container">
                <div className="cards">
                    <div className="card">
                        <img src={barak} alt="" />
                        <div className="card-text">
                        <h2>Beef dumpling in hot and sour soup</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                        <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={tuxum} alt="" />
                        <div className="card-text">
                        <h2>Healthy noodle with spinach leaf</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                        <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                        </div>
                    </div>
                </div>
                </div>
    
                </>
            }/>
            <Route path="/soub" element={
                <>
                    <div className="container">
                    <div className="cards">
                    <div className="card">
                        <img src={ut} alt="" />
                        <div className="card-text">
                        <h2>Salted Pasta with mushroom sauce</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                        <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rolton} alt="" />
                        <div className="card-text">
                        <h2>Spicy instant noodle with special omelette</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                        <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                        </div>
                    </div>
                </div>  
                    </div>
                </>
            }/>
            <Route path="grill" element={<>
            <div className="container">
            <div className="cards">
                <div className="card">
                    <img src={shurva} alt="" />
                    <div className="card-text">
                    <h2>Spicy seasoned seafood noodles</h2>
                    <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                    <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                    </div>
                </div>
                <div className="card">
                    <img src={lagmon} alt="" />
                    <div className="card-text">
                    <h2>Salted Pasta with mushroom sauce</h2>
                    <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                    <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                    </div>
                </div>
            </div>
            </div>

            </>}/>
            <Route path="/appezitter" element={ <>
                    <div className="container">
                    <div className="cards">
                    <div className="card">
                        <img src={ut} alt="" />
                        <div className="card-text">
                        <h2>Salted Pasta with mushroom sauce</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.29</span></h3>
                        <h3><span style={{opacity: ".3"}}>20 Bowls available</span></h3>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rolton} alt="" />
                        <div className="card-text">
                        <h2>Spicy instant noodle with special omelette</h2>
                        <h3 className="price"><span style={{opacity: ".3"}}>$ 2.69</span></h3>
                        <h3><span style={{opacity: ".3"}}>11 Bowls available</span></h3>
                        </div>
                    </div>
                </div>  
                    </div>
                </>}/>
        </Routes>
        </>
    )
}