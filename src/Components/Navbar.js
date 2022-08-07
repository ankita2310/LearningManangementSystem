
import React from 'react';
import {Nav, NavLink } from './NavbarElem';
import { useAuth } from '../utility/auth';

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
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/aboutUs">AboutUs</NavLink>
        <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
        <NavLink style={navLinkStyles} to="/media">Media</NavLink>
        <NavLink style={navLinkStyles} to="/membership">Membership</NavLink>


        {
            !auth.user && (
                <NavLink style={navLinkStyles} to="/login">Login</NavLink>
            )
        }
    </Nav>
)
}