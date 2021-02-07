import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul className='nav-bar'>
            <li>
                <NavLink exact to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/timers'>
                    Timers
                </NavLink>
            </li>
            <li>
                <NavLink to='/profile'>
                    Profile
                </NavLink>
            </li>
        </ul>
    );
}
 
export default NavBar;