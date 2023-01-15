import "./Hot.css"
import shurva from  "../../assets/images/shurva.png"
import lagmon from "../../assets/images/lagmon.png"
import barak from "../../assets/images/barak.png"
import tuxum from "../../assets/images/tuxum.png"
export const Hot = () => {
    return(
        <div className="hot">
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
    )
}