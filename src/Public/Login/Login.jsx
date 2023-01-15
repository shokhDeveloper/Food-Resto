import axios from "axios"
import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Context } from "../../Context"
import "./Login.css"
export const Login  = () => {
    const {token, setToken, setUser} = useContext(Context)
    const navigator = useNavigate()
    const handleSub = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const jsons = await axios({
            method: "POST",
            url: "http://localhost:5000/login",
            headers: {
                "Content-type": "application/json"
            },
            data: {email: data.get("email"), password: data.get("password") }
        })
        const response = await jsons.data
        if(response){
            const {accessToken, user} = response
            if(accessToken !== undefined || accessToken !== null){
                setToken(accessToken)
                setUser(user)
                navigator("/")
            }
        }
    }
    return(
        <div className="login" style={{display: token !== null ?"none": "flex"}}>
            <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSub}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" placeholder="Password" name="password" />
                <div className="form-btn">
                <button className="login-btn">Submit</button>
                <NavLink to={"/register"}>Register</NavLink>
                </div>
            </form>
            </div>
        </div>
    )
}