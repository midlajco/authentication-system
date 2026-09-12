import {  createContext } from "react"
import { useState,useEffect } from "react"
import { getUserByEmail,getUserById } from "../services/authApi";


const AuthContext =createContext();


function AuthProvider({children}){


    const login= async (email,password)=>{
       const users =await getUserByEmail(email);
       if(users.length === 0){
        console.log("User not found")
        return
       }
       if(password !==users[0].password){
        console.log("incorrect password")
        return
       }
       const user =users[0];
       console.log("User found",user)
       setUser(user)
       localStorage.setItem("userId",user.id)

    }

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("userId")


    }

    const fetchCurrentUser =async ()=>{
        const userId =localStorage.getItem("userId");

        if(!userId){
            return;
        }

        const user =await getUserById(userId);
        setUser(user)
         
    }

    useEffect( ()=> {
        fetchCurrentUser();
    } ,[])


    const[user,setUser] =useState(null);

    

    return(
        <AuthContext.Provider value={{  user,
                                        login,
                                        fetchCurrentUser,
                                        logout}} >
            {children}
        </AuthContext.Provider>
    )

}


export {AuthContext,AuthProvider} 