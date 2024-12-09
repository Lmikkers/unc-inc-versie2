import React from 'react';
import {NavLink} from 'react-router-dom';

import homeIcon from '../assets/homeIcon.svg';
import loginIcon from '../assets/loginIcon.svg';
import dashboardIcon from '../assets/dashboardIcon.svg';

const Navbar=()=>{
    return (  
        <nav> 
            <ul>
                <li><NavLink to="/home" aria-label="Ga naar de homepagina" activeclassname="active"><img alt="home icon" src={homeIcon}/><span className="nav-text">Home</span></NavLink></li>
                <li><NavLink to="/login" aria-label="Ga naar de login pagina" activeclassname="active"><img alt="login icon" src={loginIcon}/><span className="nav-text">Login</span></NavLink></li>
                <li><NavLink to="/dashboard" aria-label="Ga naar de dashboard pagina" activeclassname="active"><img alt="dashboard icon" src={dashboardIcon}/><span className="nav-text">Dashboard</span></NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar;