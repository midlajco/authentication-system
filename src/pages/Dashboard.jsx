import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


function Dashboard() {

const { logout } =useContext(AuthContext)
const navigate =useNavigate();

const handleLogout =()=>{
  logout();
  navigate("/login")
}

  return (
    <div>
        <h1>dash</h1>
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Dashboard