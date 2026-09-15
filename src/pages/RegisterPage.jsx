import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { validateRegister } from "../utils/validation";

function RegisterPage() {

    const { register } = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const userData = {
        username,
        email,
        password,
        fullName
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateRegister(userData);
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        await register({
            username,
            email,
            password,
            fullName
        })
        navigate("/login")

    }



    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleSubmit}
                className="w-full max-w-md space-y-4 p-6 rounded-lg border shadow-md"
            >
                <h1 className="text-2xl font-bold text-center" >
                    Create Account
                </h1>
                <div >
                    <label htmlFor="username"
                        className="block mb-1 font-medium"
                    >UserName</label>

                    <input id="username"
                        type="text"
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
                        onChange={(e) => {
                            const value = e.target.value;
                            setUsername(value);
                            const validationErrors = validateRegister(
                                {
                                    username: value,
                                    email,
                                    password,
                                    fullName
                                })
                            setErrors((prev) => ({
                                ...prev,
                                username: validationErrors.username
                            }));

                        }}

                    />
                    {errors.username && (
                        <p
                            className="mt-1 text-sm text-red-500"
                        >{errors.username}
                        </p>
                    )}

                </div>
                <div>
                    <label htmlFor="email"
                        className="block mb-1 font-medium"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmail(value);
                            const validationErrors = validateRegister({

                                username,
                                email: value,
                                password,
                                fullName
                            });
                            setErrors((prev) => ({
                                ...prev,
                                email: validationErrors.email,
                            }))



                        }}



                       
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1 font-medium"
                        htmlFor="password">Password</label>
                    <input id="password" type="password"
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
                        onChange={(e) => {
                            const value =e.target.value;
                            setPassword(value);
                            const validationErrors =validateRegister({
                                username,
                                email,
                                password:value,
                                fullName
                            });
                            setErrors((prev)=>({
                                ...prev,
                                password:validationErrors.password,
                            }))

                        }}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500" >
                            {errors.password}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="fullName"
                        className="block mb-1 font-medium">FullName</label>
                    <input id="fullName" type="text"
                        onChange={(e) =>{
                            const value =e.target.value;
                            setFullName(value);
                            const validationErrors=validateRegister({
                                username,
                                email,
                                password,
                                fullName:value
                            });
                            setErrors((prev)=>({
                                ...prev,
                                fullName:validationErrors.fullName
                            }))


                        }} 
                        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2"
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500"
                        >{errors.fullName}</p>
                    )}
                </div>
                <button type="submit"
                    className="w-full rounded-md bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
                >Register</button>
            </form  >
        </div>
    )
}

export default RegisterPage