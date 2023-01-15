export const Cards = () => {
    return(
        <div className="dashboard_cards" style={{padding: "1rem", display: "flex", justifyContent: "space-evenly"}}>
            <div className="card" style={{width: "30%"}}>
                <div className="card_text" style={{display: "flex", width: "80%", justifyContent: "space-between"}}>
                    <button style={{padding: "0.4rem 0.9rem", fontSize: "17px", borderRadius: "20px", background: "#252836", color: "#9288E0", border: "1px solid #9288E0"}}>$</button>
                    <p style={{color: "#50D1AA"}}><span>+32.40%</span></p>
                    <button style={{ background: "transparent", color: "#50D1AA", border: "1px solid #50D1AA", padding: "0.3rem" , borderRadius: "10px"}}>Frash</button>
                </div>
                <div className="card_dashboard_text" style={{paddingTop: "1rem"}}>
                <h2 style={{color: "#fff"}}>$10,243.00</h2>
                <p><span style={{opacity: ".3", color: "#fff"}}>Total Revenue</span></p>
                </div>
            </div>
            <div className="card" style={{width: "30%"}}>
                <div className="card_text" style={{display: "flex", width: "80%", justifyContent: "space-between"}}>
                    <button style={{padding: "0.4rem 0.9rem", fontSize: "17px", borderRadius: "20px", background: "#252836", color: "#9288E0", border: "1px solid #9288E0"}}>&times;</button>
                    <p style={{color: "#FF7CA3"}}><span>-12.40%</span></p>
                    <button style={{ background: "transparent", color: "#50D1AA", border: "1px solid #50D1AA", padding: "0.3rem" , borderRadius: "10px"}}>Frash</button>
                </div>
                <div className="card_dashboard_text" style={{paddingTop: "1rem"}}>
                <h2 style={{color: "#fff"}}>23,456</h2>
                <p><span style={{opacity: ".3", color: "#fff"}}>Total Dish Ordered</span></p>
                </div>
            </div>
            <div className="card" style={{width: "30%"}}>
                <div className="card_text" style={{display: "flex", width: "80%", justifyContent: "space-between"}}>
                    <button style={{padding: "0.4rem 0.9rem", fontSize: "17px", borderRadius: "20px", background: "transparent", color: "#65B0F6", border: "1px solid #9288E0"}}>$</button>
                    <p style={{color: "#65B0F6"}}><span>+2.40%</span></p>
                    <button style={{ background: "transparent", color: "#50D1AA", border: "1px solid #50D1AA", padding: "0.3rem" , borderRadius: "10px"}}>Frash</button>
                </div>
                <div className="card_dashboard_text" style={{paddingTop: "1rem"}}>
                <h2 style={{color: "#fff"}}>1,234</h2>
                <p><span style={{opacity: ".3", color: "#fff"}}>Total Revenue</span></p>
                </div>
            </div>
        </div>
    )
}