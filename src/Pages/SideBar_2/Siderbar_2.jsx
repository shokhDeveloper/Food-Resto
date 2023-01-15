import Number_1 from "../../assets/images/number_1.png"
import { DeleteOutlined } from "@ant-design/icons"
import "./Sidebar.css"
import { useContext } from "react"
import { Context } from "../../Context/Context"
import { Modal } from "../Modal/Modal"
export const Sidebar_2 = () => {
    const {user, setModal, modal} = useContext(Context)
    function handleClick(){
        setModal(!modal)
    }
    return(
        <>
            <div className="sidebar_2">
            <h2 className="sidebar_2_logo">
                {user.firstname +  "   " +   user.lastname}
            </h2>
            <div className="sidebar_2_btns">
            <button>Dine In</button>
            <button>To Go</button>
            <button>Delivery</button>
            </div>
            <div className="side_text">
                <h4>Item</h4>
                <div className="side_text_mini">
                    <h4>Qty</h4>
                    <h4>Price</h4>
                </div>
            </div>
            <div className="border">
                <hr />
            </div>
            <div className="price_number">
                <div className="number_1">
                    <img src={Number_1} alt="" />
                    <div className="number_1_text">
                    <p>Spicy seasoned sea</p>
                    <span style={{opacity: ".3", color: "grey"}}>$ 2.29</span>
                    </div>
                </div>
                <div className="number_1_btns">
                    <button>2</button>
                    <p>$ 4,58</p>
                </div>
            </div>
            <div className="number_1_delete">
                <input type="text" placeholder="Please, just a little bit spicy only." style={{background: "#393C49", fontSize: "13px", width: "80%", margin: 0}} />
                <button><DeleteOutlined/></button>
            </div>
            <div className="price_number">
                <div className="number_1">
                    <img src={Number_1} alt="" />
                    <div className="number_1_text">
                    <p>Spicy seasoned sea</p>
                    <span style={{opacity: ".3", color: "grey"}}>$ 2.29</span>
                    </div>
                </div>
                <div className="number_1_btns">
                    <button>2</button>
                    <p>$ 4,58</p>
                </div>
            </div>
            <div className="number_1_delete">
                <input type="text" placeholder="Please, just a little bit spicy only." style={{background: "#393C49", fontSize: "13px", width: "80%", margin: 0}} />
                <button><DeleteOutlined/></button>
            </div>
            <div className="price_number">
                <div className="number_1">
                    <img src={Number_1} alt="" />
                    <div className="number_1_text">
                    <p>Spicy seasoned sea</p>
                    <span style={{opacity: ".3", color: "grey"}}>$ 2.29</span>
                    </div>
                </div>
                <div className="number_1_btns">
                    <button>2</button>
                    <p>$ 4,58</p>
                </div>
            </div>
            <div className="number_1_delete">
                <input type="text" placeholder="Please, just a little bit spicy only." style={{background: "#393C49", fontSize: "13px", width: "80%", margin: 0}} />
                <button><DeleteOutlined/></button>
            </div>
            <div className="disc">
                <div className="disc_text">
                    <p><span>Discount</span></p>
                    <p><span>$0</span></p>
                </div>
                <div className="disc_text">
                    <p><span>Sub total</span></p>
                    <p><span> $ 21,03</span></p>
                </div>
            </div>
            <div className="align_buttons_parent">
            <button onClick={handleClick} className="align_button">
            Continue to Payment
            </button>
            </div>
        </div>
        <Modal/>
        </>
        
    )
}