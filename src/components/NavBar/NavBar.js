import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul className='nav-bar'>
            <li>
                <NavLink exact to='/'>
                    Home
                </NavLink>
            </li>
            {
                (localStorage.token) ? 
                <>
                <li>
                    <NavLink to='/timers'>
                        Timers
                    </NavLink>
                </li>
                <li>
                <NavLink to='/logout'>
                    Logout
                </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </li>
                </>
                :
                <>
                <li>
                <NavLink to='/login'>
                    Login
                </NavLink>
                </li>
                <li>
                <NavLink to='/register'>
                    Register
                </NavLink>
                </li>
                </>
            }
        </ul>
    );
}
 
export default NavBar;