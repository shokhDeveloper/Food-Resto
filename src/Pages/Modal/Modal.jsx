import { useContext } from "react"
import { Context } from "../../Context"
import Number_1 from "../../assets/images/number_1.png"
import { DeleteOutlined } from "@ant-design/icons"
import Payment_Card_1 from "../../assets/images/payment_card_1_orginal.png"
export const Modal = () => {
    const {modal, setModal, user} = useContext(Context)
    const styleOverlay = {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0,0,0,0.4)",
        display: modal !== true? "none": "flex",
        justifyContent: "flex-end"
    }
    const handleClick = () => {
        setModal(!modal)
    }
    return(
        <div className="overlay" style={styleOverlay}>
            <div className="modal"  style={{height: "auto", background: "1d1d2c"}}>
            <div className="sidebar_2" style={{width: "380px", padding: "0rem 0rem 3.2rem 0rem"}}>
            <h2 className="sidebar_2_logo">
                {user.firstname +  "   " +   user.lastname}
            </h2>
            <h4 style={{color: "#fff" , padding:"0.4rem 1rem"}}>Payment card </h4>
            <div className="border" style={{width: "100%"}}>
                <hr />
            </div>
            <div className="payment_method" style={{padding: "1rem 1rem", display: "flex", justifyContent: "space-evenly"}}>
                <div className="payment_card_1" style={{width: "30%", color: "#fff", borderRadius: "10px", textAlign: "Center", border: "1px solid #ABBBC2", padding: "0.5rem"}} >
                    <img src={Payment_Card_1} alt="" />
                    <h4>Credit card</h4>
                </div>
                <div className="payment_card_1" style={{width: "30%", color: "#fff", borderRadius: "10px", textAlign: "Center", border: "1px solid #ABBBC2", padding: "0.5rem"}} >
                    <img src={Payment_Card_1} alt="" />
                    <h4>Credit card</h4>
                </div>
                <div className="payment_card_1" style={{width: "30%", color: "#fff", borderRadius: "10px", textAlign: "Center", border: "1px solid #ABBBC2", padding: "0.5rem"}} >
                    <img src={Payment_Card_1} alt="" />
                    <h4>Credit card</h4>
                </div>
            </div>
            <form id="form"/>
            <div className="payment_accermant" style={{width: "80%", margin: "0 auto", paddingTop: "1rem"}}>
                    <h4 style={{color: "#fff"}}><span>Cardholder Name</span></h4>
                    <input form="form" style={{background: "#393C49", width: "100%", fontSize: "17px"}} type="text" placeholder="Levi Ackerman" />
            </div>
            <div className="payment_accermant" style={{width: "80%", margin: "0 auto", paddingTop: "1rem"}}>
                    <h4 style={{color: "#fff"}}><span>Card Number</span></h4>
                    <input form="form" style={{background: "#393C49", width: "100%", fontSize: "17px"}} type="text" placeholder="2564 1421 0897 1244" />
            </div>
            <div className="expration" style={{width: "85%" ,margin: "0 auto", color: "#fff", display: "flex", justifyContent: "space-between"}}>
                <div className="expration_1" style={{width: "50%"}}>
                    <h4><span>Expiration Date</span></h4>
                    <input form="form"  type="text" placeholder="02/2022" style={{ background:"#393C49", width: "100%"}}/>
                </div>
                <div className="expration_1" style={{width: "50%", margin: "0rem 1rem"}}>
                    <h4><span>CVV</span></h4>
                    <input type="text" form="form"  placeholder=" * * *" style={{ background: "#393C49", width: "100%"}}/>
                </div>
            </div>
            <div className="border">
            <hr />
            </div>
            <div className="order" style={{width: "85%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className="type">
                    <h4 style={{padding: "1rem 0rem", color: "#fff"}}><span>Order type</span></h4>
                    <select style={{padding: "0.5rem 2rem", background: "#393C49", color: "#fff", border: "1px solid #393C49", borderRadius: "10px", fontSize: "17px"}}>
                        <option value="dine" selected disabled>Dine in</option>
                    </select>
                </div>
                <div className="type">
                    <h4 style={{padding: "1rem 1rem", color: "#fff"}}><span>Table no.</span></h4>
                    <input type="text" placeholder="140" style={{background: "#393C49", width: "80%", margin: "0 auto"}} />
                </div>
            </div>
            <div className="end" style={{width: "85%", margin: "0 auto", paddingTop: "2rem", display: "flex", justifyContent: "space-between" 
        }}>
                <button style={{width: "45%", background: "transparent", color: "var(--orange)", border: "1px solid var(--orange)", padding: "0.5rem 1rem", borderRadius: "10px"}} onClick={handleClick}>Cencel</button>
                <button style={{width: "50%", background: "var(--orange)", color: "#fff", border: "1px solid var(--orange)", padding: "0.5rem 1rem", borderRadius: "10px"}}>Confirm Payment</button>
            </div>
            </div>  
            </div>
        </div>
    )
}