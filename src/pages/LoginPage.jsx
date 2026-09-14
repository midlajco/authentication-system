import { useState } from "react";
import { useContext } from "react";
import {AuthContext} from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const {login}=useContext(AuthContext);
const navigate =useNavigate();




const handleSubmit =async  (e) => {
  e.preventDefault();
  const success =await login(email,password);
  if ( success === true ){
     navigate("/dashboard")

  }
 
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" >
        <h1 className="text-2xl font-bold text-center mb-4"
          >Login</h1>
        <form onSubmit={handleSubmit}
               className="w-full max-w-md space-y-4 p-6 rounded-lg border shadow-md"  >
            <div>
                <label htmlFor="email"
                         className="block mb-1 font-medium"
                        >
                          Email</label>
                <input id="email"
                       type="email" 
                        name="email"
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password"
                        className="block mb-1 font-medium"
                        >Password</label>
                <input id="password" 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
      />
            </div>
            <button type="submit"
                  className="w-full rounded-md bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
              > Login</button>
        </form>
    </div>
  )
}

export default LoginPage