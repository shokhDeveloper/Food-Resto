import { modalGlobalConfig } from "antd/es/modal/confirm";
import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    let food_token = window.localStorage.getItem("food_token")
    const [token, setToken] = useState(food_token !== null? food_token : null)
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("food_token", token)
        }
    },[token])
    let food_user = window.localStorage.getItem("food_user")
    const [user, setUser] = useState(food_user !== null? JSON.parse(food_user): null)
    useEffect(()=>{
        if(user !== null){
            window.localStorage.setItem("food_user", JSON.stringify(user))
        }
    },[user])
    const [modal, setModal] = useState(false)
    return(
        <Context.Provider value={{token, setToken, modal, setModal, user, setUser}}>
            {children}
        </Context.Provider>
    )
}