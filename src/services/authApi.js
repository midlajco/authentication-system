import axios from "axios";

export const getUserByEmail = async(email)=>{
    const response = await axios.get(`http://localhost:3001/users?email=${email}`)
      return response.data
        

    }
export const getUserById =async(id)=>{
  const response =await axios.get(`http://localhost:3001/users/${id}`)
    return response.data
  
}

