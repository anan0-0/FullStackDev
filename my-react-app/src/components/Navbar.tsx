import React from "react"
import { NavLink, Link,useNavigate } from 'react-router-dom';
import Button from "../Button";


const Navbar=() => {
    const Navigate = useNavigate();
    return ( 
        <div className="nav-container"> 
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>    
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>
            <button onClick={() => Navigate('/')}>Button</button>
        </div>
    );
}

export default Navbar;

//Use NavLink instead of Link for active link styling
//NavLink allows you to apply styles to the active link, making it easier to highlight the current page.
//useNavigate is used to programmatically navigate to a different route, which is useful for buttons or other interactive elements that need to change the route without using a link.