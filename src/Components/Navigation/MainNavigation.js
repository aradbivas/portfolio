import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import astro from '../images/astronaute-icon.jpg'
const MainNavigation = props => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () =>
    {
        setDrawerOpen(true);
    }
    const closeDrawer = () =>
    {
        setDrawerOpen(false);
    }
    return (
        <React.Fragment>
            {drawerOpen && <Backdrop onClick={closeDrawer}/>}
            <SideDrawer show={drawerOpen} onClick={closeDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button onClick={openDrawer} className="main-navigation__menu-btn">
                    <span className='span-back-drawer' />
                    <span />
                    <span />
                </button>
                <div className="main-navigation__title">
                    <Link to="/"><img alt='' src={astro}/></Link>
                </div>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
