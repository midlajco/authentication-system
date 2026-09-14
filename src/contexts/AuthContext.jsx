import { useState,useEffect,createContext } from "react"
import { useNavigate } from "react-router-dom";
import { getUserByEmail,
        getUserById,
        createUser } from "../services/authApi";


 const AuthContext =createContext();
 
 


function AuthProvider({children}){

    
    const[user,setUser] =useState(null);
    const [isLoading,setIsLoading]=useState(true)


//register    
   
    const register =async(userData)=>{
      const result = await createUser(userData)
      return result
    };
    

//login
    const login= async (email,password)=>{
       const users =await getUserByEmail(email);
       if(users.length === 0){
        return false;
       }
       if(password !==users[0].password){
        return false;
       }
       const user =users[0];
       setUser(user)
       localStorage.setItem("userId",user.id)
       return true;
      

    };
//logout
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("userId");
  };
//fetch-loginned user after referesh

    const fetchCurrentUser =async ()=>{
        const userId =localStorage.getItem("userId");

        if(!userId){
            setIsLoading(false)
             return ; }

        const user =await getUserById(userId);
        setUser(user);
        setIsLoading(false);
         
    }

      // Check authentication when app starts

    useEffect( ()=> {
        fetchCurrentUser();
    } ,[])


    

// check- if user is logged in

    const isAuthenticated =() =>{
        return user  !==  null;
    }



    

    return(
        <AuthContext.Provider value={{  user,
                                        login,
                                        fetchCurrentUser,
                                        logout,
                                        isAuthenticated,
                                        isLoading,
                                        register}} >
            {children}
        </AuthContext.Provider>
    )

}


export {AuthContext,AuthProvider} 