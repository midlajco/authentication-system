import { useState } from "react";
import { useContext } from "react";
import {AuthContext} from "../contexts/AuthContext";


function LoginPage() {
    
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const {login}=useContext(AuthContext)




const handleSubmit = (e) => {
  e.preventDefault();

  login(email,password)
};

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"  name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" > Login</button>
        </form>
    </div>
  )
}

export default LoginPage