import { NavLink } from 'react-router-dom'
import React, {useState} from 'react'
import './NavBar.css'


const NavBar = ({isLoggedIn}) => {

    console.log(`NavBar says user logged in: ${isLoggedIn}`)

    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light' style={{width: '500px'}}>
            <ul className="nav container-fluid">
                {
                    (isLoggedIn) ? 
                    <>
                    <li className="navbar-brand">
                        <NavLink to='/timers' className="nav-link">
                            Timers
                        </NavLink>
                    </li>
                    <li className="navbar-brand">
                    <NavLink to='/logout' className="nav-link">
                        Logout
                    </NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to='/profile' className="nav-link">
                            Profile
                        </NavLink>
                    </li>
                    </>
                    :
                    <>
                    <li className="navbar-brand">
                    <NavLink to='/login' className="nav-link">
                        Login
                    </NavLink>
                    </li>
                    <li className="navbar-brand">
                    <NavLink to='/register' className="nav-link">
                        Register
                    </NavLink>
                    </li>
                    </>
                }
            </ul>
        </div>
    );
}
 
export default NavBar;