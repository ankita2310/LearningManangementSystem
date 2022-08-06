
import React from 'react';

import { useAuth } from '../utility/auth';
import {Nav,NavLink} from './NavbarElem';

export const Navbar =()=>{
    const navLinkStyles=({ isActive }) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth=useAuth()

return(
    <Nav>
        <h3>Educademy</h3>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/aboutUs">AboutUs</NavLink>
        <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
        {
            !auth.user && (
                <NavLink style={navLinkStyles} to="/login">Login</NavLink>
            )
        }
    </Nav>
)
}