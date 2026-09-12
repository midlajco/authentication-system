import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const {isAuthenticated,isLoading} = useContext(AuthContext)
    if (isLoading) {
    return <div>Loading...</div>
    }
    if (!isAuthenticated()){
        return <Navigate to="/login" />
    }
  return children
}

export default ProtectedRoute