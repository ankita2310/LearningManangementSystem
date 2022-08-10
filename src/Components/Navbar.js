
import React from 'react';
import {Nav, NavLink, Bars, NavMenu,NavBtn, NavBtnLink } from './NavbarElements.js';
import { useAuth } from '../utility/auth';


export const Navbar =()=>{
    /*
    const navLinkStyles=({ isActive }) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    */
    const auth=useAuth()

return(
    <> 
        <Nav>
        <NavLink to="/" style={{color:'#fff'}}>
                <h3>EDUCADEMY</h3>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyles>Home</NavLink>
                <NavLink to="/aboutUs" activeStyles>About Us</NavLink>
                <NavLink to="/profile" activeStyles>Profile</NavLink>
                <NavLink to="/media" activeStyles>News/Events</NavLink>
                <NavLink to="/membership" activeStyles>Membership</NavLink>
                {
            !auth.user && (
                <NavLink to="/login">Login</NavLink>
            )
            }
            <NavBtn>
                <NavBtnLink to="/signUp">Sign Up</NavBtnLink>
            </NavBtn>

            </NavMenu>

        </Nav>
    </>
)
}