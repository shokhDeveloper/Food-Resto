import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Context } from "../../Context"
export const Register = () => {
    const [firstnameError, setFirstNameError] = useState("Firstname is required")
    const [firstTouched, setFirstTouched] = useState(false)
    const [lastnameError, setLastNameError] = useState("Lastname is required")
    const [lastTouched, setLastTouched] = useState(false)
    const [EmailError, setEmailError] = useState("Email is required")
    const [EmailTouched, setEmailTouched] = useState(false)
    const [passwordError, setPasswordError] = useState("Password is required")
    const [passwordTouched, setPasswordTouched] = useState(false)
    const {token , setToken, setUser} = useContext(Context)
    const navigator = useNavigate()
    const handleSub = async (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        const jsons = await axios({
            method: "POST",
            url: "http://localhost:5000/register",
            headers: {
                "Content-type": "application/json"
            },
            data:{firstname: data.get("firstname"), lastname: data.get("lastname"),email: data.get("email"), password: data.get("password")}
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
    const handleBlur = (event) => {
        
        switch(event.target.name){
            case "firstname":{
                setFirstTouched(true)
            }break;
            case "lastname":{
                setLastTouched(true)
            }break;
            case "email":{
                setEmailTouched(true)
            }break;
            case "password":{
                setPasswordTouched(true)
            }
        }
    }
    const handleKey = (event) => {
        switch(event.target.name){
            case "firstname":{
                if(event.target.value.length > 2){
                    setFirstNameError("")
                }else{
                    setFirstNameError("Firstname not found")
                }
            }break;
            case "lastname":{
                if(event.target.value.length > 2){
                    setLastNameError("")
                }else{
                    setLastNameError("Lastname not found")
                }
            }break;
            case "email":{
                const re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(re.test(event.target.value) === true){
                    setEmailError("")
                }else{
                    setEmailError("Email is not found")
                }
            }break;
            case "password":{
                if(event.target.value.length > 3 && event.target.value.length  < 15){
                    setPasswordError("")
                }else{
                    setPasswordError("Password is not found")
                }
            }
        }
    }
    return(
        <div className="register" style={{display: token !== null? "none": "flex" }}>
            <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSub} className="form" >
                <input onKeyUp={handleKey} type="text" placeholder="Firstname" onBlur={handleBlur} required name="firstname" />
                <span style={{display: firstTouched !== true? "none": "block" }}>{firstnameError}</span>
                <input onKeyUp={handleKey} type="text" placeholder="Lastname" onBlur={handleBlur} required name="lastname" />
                <span style={{display: lastTouched !== true? "none": "block" }}>{lastnameError}</span>
                <input onKeyUp={handleKey} onBlur={handleBlur} type="email" placeholder="Email" required name="email" />
                <span style={{display: EmailTouched !== true? "none": "block" }}>{EmailError}</span> 
                <input onKeyUp={handleKey} type="password" onBlur={handleBlur} placeholder="Password" required name="password" />
                <span style={{display: passwordTouched !== true? "none": "block", paddingBottom: "1rem" }}>{passwordError}</span>
                <button className="login-btn">Register</button>
            </form>
            </div>
        </div>
    )
}