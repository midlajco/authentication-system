import {  createContext } from "react"
import { useState } from "react"
import { getUserByEmail } from "../services/authApi";

const AuthContext =createContext();


function AuthProvider({children}){

    const login= async (email,password)=>{
       const users =await getUserByEmail(email);
       if(users.length === 0){
        console.log("User not found")
        return
       }
       const user =users[0];
       console.log("User found",user)

    }
    const[user,setUser] =useState(null);

    return(
        <AuthContext.Provider value={{user,login}} >
            {children}
        </AuthContext.Provider>
    )

}


export {AuthContext,AuthProvider} 