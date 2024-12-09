import React from 'react';
import {Link} from 'react-router-dom';

import homeIcon from '../assets/homeIcon.png';
import loginIcon from '../assets/loginIcon.png';

const Navbar=()=>{
    return (  
        <nav> 
            <ul>
                <li><Link to="/home" aria-label="Ga naar de homepagina" activeclassname="active"><img alt="home icon" src={homeIcon}/>Home</Link></li>
                <li><Link to="/login" aria-label="Ga naar de login pagina" activeclassname="active"><img alt="login icon" src={loginIcon}/>Login</Link></li>
                <li><Link to="/dashboard" aria-label="Ga naar de dashboard pagina" activeclassname="active">Dashboard</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;