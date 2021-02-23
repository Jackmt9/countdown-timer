import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink exact to='/' className="nav-link">
                    Home
                </NavLink>
            </li>
            {
                (localStorage.token) ? 
                <>
                <li class="nav-item">
                    <NavLink to='/timers' className="nav-link">
                        Timers
                    </NavLink>
                </li>
                <li class="nav-item">
                <NavLink to='/logout' className="nav-link">
                    Logout
                </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/profile' className="nav-link">
                        Profile
                    </NavLink>
                </li>
                </>
                :
                <>
                <li class="nav-item">
                <NavLink to='/login' className="nav-link">
                    Login
                </NavLink>
                </li>
                <li class="nav-item">
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