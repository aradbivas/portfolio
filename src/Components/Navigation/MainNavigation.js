import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {

    return (
        <React.Fragment>

            <MainHeader>
                <div className="main-navigation__title">
                    <Link to="/"><img alt='' src='https://static.vecteezy.com/system/resources/previews/002/084/153/large_2x/cute-astronaut-character-super-hero-cartoon-icon-illustration-free-vector.jpg'/></Link>
                </div>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
