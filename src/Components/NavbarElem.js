import { NavLink as Link } from "react-router-dom";
import style from "styled-components";

export const Nav=style.nav`
background:#FCF8E8;
height:50px;
display:flex;
padding: 0.5rem calc((100vw-1000px));
z-index:10;
`

export const NavLink=style(Link)`
color:#ECB390;
display: flex;
align-items: center;
text-decoration:none;
cursor:pointer;
padding: 1rem;
font-weight:bolder;
height:100%;
font-family:Verdana,sans-serif;

&.active{
    color:#5c035a;
}
`