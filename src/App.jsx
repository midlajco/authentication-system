import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {AuthProvider} from "./contexts/AuthContext"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import RegisterPage from "./pages/RegisterPage"


function App() {


  return (
   
     <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route  path="/" element={<Navigate to="/login" />}/>
            <Route  path="/login"  element={<LoginPage/>}/>
            <Route  path="/dashboard"  
                 element={  <ProtectedRoute>
                                    <Dashboard/>
                            </ProtectedRoute>}/>
            <Route path="/register"  element={<RegisterPage/>} />
              
            
        </Routes>
      </AuthProvider>
        
    </BrowserRouter>
  
    
  )
}

export default App