import React from 'react';
import Logo from '../../assets/imgs/logo.png';

import './LogoComp.scss';

const LogoComp = () => {
    return (
        <div className="logo-comp">
            {/*<h1 className="neon-text">LOGO</h1>*/}
            {/*<h2 className="neon-text">HERE</h2>*/}
            <img src={Logo} alt="turtle-logo"/>
        </div>
    );
};

export default LogoComp;