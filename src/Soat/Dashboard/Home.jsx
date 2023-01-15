import Avatar_1 from "../../assets/images/Avatar 1.png"
import Avatar_2 from "../../assets/images/Avatar_2.png"
export const Home = () => {
    return(
        <ul className="listes">
            <li>
                <img src={Avatar_1} alt="" />
                <h4>Eren Jaegar</h4>
                <div className="listes_li_text" style={{color: "grey"}}>
                    <p><span>Spicy seasoned </span></p>
                    <p><span> seafood noodles</span></p>
                </div>
                <p><span>$125</span></p>
                <button>Complated</button>
            </li>
            <li>
                <img src={Avatar_2} alt="" />
                <h4>Reiner Braunn</h4>
                <div className="listes_li_text" style={{color: "grey"}}>
                    <p><span>Spicy seasoned </span></p>
                    <p><span> seafood noodles</span></p>
                </div>
                <p><span>$145</span></p>
                <button style={{background: "#9290FE", color: "#111121"}}>Preparing</button>
            </li>
            <li>
                <img src={Avatar_1} alt="" />
                <h4>Eren Jaegar</h4>
                <div className="listes_li_text" style={{color: "grey"}}>
                    <p><span>Spicy seasoned </span></p>
                    <p><span> seafood noodles</span></p>
                </div>
                <p><span>$125</span></p>
                <button>Complated</button>
            </li>
            <li>
                <img src={Avatar_1} alt="" />
                <h4>Eren Jaegar</h4>
                <div className="listes_li_text" style={{color: "grey"}}>
                    <p><span>Spicy seasoned </span></p>
                    <p><span> seafood noodles</span></p>
                </div>
                <p><span>$125</span></p>
                <button>Complated</button>
            </li>
        </ul>
    )
}