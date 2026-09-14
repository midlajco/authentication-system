import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const {register} =useContext(AuthContext)
    const navigate =useNavigate()

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[fullName,setFullName]=useState("");

    const handleSubmit =async (e)=>{
        e.preventDefault();
        await register({username,
                    email,
                    password,
                    fullName
        })
        navigate("/login")

    }

    

  return (
    <div>
        <form onSubmit={handleSubmit} > 
            <div>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text"
                        onChange={(e=>setUsername(e.target.value))}
                        value={username} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"
                       onChange={(e=>setEmail(e.target.value))}
                        value={email} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" 
                         onChange={(e=>setPassword(e.target.value))}
                        value={password} />
            </div>
            <div>
                <label htmlFor="fullName">FullName</label>
                <input id="fullName" type="text" 
                         onChange={(e=>setFullName(e.target.value))}
                        value={fullName} />
            </div>
            <button type="submit" >Register</button>
        </form  >
    </div>
  )
}

export default RegisterPage