import { NavLink } from 'react-router-dom'
import React, {useState} from 'react'
import './NavBar.css'


const NavBar = ({isLoggedIn}) => {

    console.log(isLoggedIn)

    return (
        <ul className="nav">
            {
                (isLoggedIn) ? 
                <>
                <li className="nav-item">
                    <NavLink to='/timers' className="nav-link">
                        Timers
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/logout' className="nav-link">
                    Logout
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/profile' className="nav-link">
                        Profile
                    </NavLink>
                </li>
                </>
                :
                <>
                <li className="nav-item">
                <NavLink to='/login' className="nav-link">
                    Login
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/register' className="nav-link">
                    Register
                </NavLink>
                </li>
                </>
            }
        </ul>
    );
}
 
export default NavBar;