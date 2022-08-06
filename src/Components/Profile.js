import React from "react";
import { useAuth } from "../utility/auth";
import { useNavigate } from "react-router-dom";

export const Profile=()=>{
    const auth=useAuth();
    const navigate=useNavigate()
    const handleLogOut=()=>{
            auth.logout()
            navigate('/')
    }
    return(
        <div>Welcome auth.user <br/>
        <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

