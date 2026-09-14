import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


function Dashboard() {

const { logout } =useContext(AuthContext)
const navigate =useNavigate();
const {user} =useContext(AuthContext)

const handleLogout =()=>{
  logout();
  navigate("/login")
}

  return (
    <div  className="min-h-screen flex items-center justify-center bg-gray-100 p-4" >
        <div>
            <h1 className="mb-6 text-2xl font-bold text-center"
             >welcome</h1>
        
        <p className="mb-2">
          <span className="font-medium">UserName:</span>
          {user.username}</p>

        <p className="mb-2">
          <span className="font-medium">Email:</span>
          {user.email}</p>

        <p className="mb-2" >
           <span className="font-medium">FullName</span>
           {user.fullName}</p>

        <button onClick={handleLogout}
                 className="mt-6 w-full rounded-md bg-red-600 p-2 font-medium text-white hover:bg-red-700" >Logout</button>
        </div>
        
    </div>
  )
}

export default Dashboard