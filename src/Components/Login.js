import {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../utility/auth'

const Login = () => {
    const[user,setUser]=useState('')
    const auth=useAuth();
    const navigate=useNavigate();
    const handleLogin=()=>{
        auth.login(user)
        navigate("/")
    }
  return (
    <div>
        <label>
            UserName: <input type="text" onChange={e=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login
