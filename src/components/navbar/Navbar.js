import {NavLink} from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active'
    const noramlLink = 'nav-list__link'

    return ( <nav className="nav">
        <div className="container">
            <div className="nav-row"> 

                <NavLink className="logo">
                    <strong>Loream</strong> ipsum
                </NavLink>

                <BtnDarkMode />

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to='/' className={({isActive}) => { return isActive ? activeLink : noramlLink;  }}>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to='/projects' className={({isActive}) => { return isActive ? activeLink : noramlLink;  }}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to='/contacts' className={({isActive}) => { return isActive ? activeLink : noramlLink;  }}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
    );
}
 
export default Navbar;