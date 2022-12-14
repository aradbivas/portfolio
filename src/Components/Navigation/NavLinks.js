import React  from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {

    return (
        <ul className='nav-links'>
            <li>
                <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
