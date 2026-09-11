import {  createContext } from "react"
import { useState } from "react"

const AuthContext =createContext();


function AuthProvider({children}){
    const login=(email,password)=>{
        console.log("login attempt",email,password)
  
}
    const[user,setUser] =useState(null);

    return(
        <AuthContext.Provider value={{user,login}} >
            {children}
        </AuthContext.Provider>
    )

}


export {AuthContext,AuthProvider} 