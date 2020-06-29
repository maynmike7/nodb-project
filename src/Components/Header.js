import React from 'react';
import Logo from './Logo'

const Header = () => {
    return(
        <header className='main-header'>
            <Logo/>
            <h1>Team Battle</h1>
            <Logo/>
        </header>
    )
}

export default Header;