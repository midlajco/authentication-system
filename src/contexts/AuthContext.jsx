import {  createContext } from "react"
import { useState,useEffect } from "react"
import { getUserByEmail,getUserById } from "../services/authApi";


const AuthContext =createContext();


function AuthProvider({children}){

//login
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
//logout
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("userId")


    }
//fetch-loginned user

    const fetchCurrentUser =async ()=>{
        const userId =localStorage.getItem("userId");

        if(!userId){
            setIsLoading(false)
             return ; }

        const user =await getUserById(userId);
        setUser(user)
        setIsLoading(false)
         
    }

    useEffect( ()=> {
        fetchCurrentUser();
    } ,[])


    const[user,setUser] =useState(null);

// check- is authenticated

    const isAuthenticated =() =>{
        return user  !==  null;
    }

     const [isLoading,setIsLoading]=useState(true)

    

    return(
        <AuthContext.Provider value={{  user,
                                        login,
                                        fetchCurrentUser,
                                        logout,
                                        isAuthenticated,
                                        isLoading}} >
            {children}
        </AuthContext.Provider>
    )

}


export {AuthContext,AuthProvider} 