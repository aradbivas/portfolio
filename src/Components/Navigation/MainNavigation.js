import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

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
                    <span />
                    <span />
                    <span />
                </button>
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
