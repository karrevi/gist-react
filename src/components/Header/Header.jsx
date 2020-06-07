import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <NavLink to='/login' exact>Inicia Sesión</NavLink>
            <NavLink to='/register' exact>Crea tu cuenta</NavLink>
        </header>
    )
}
export default Header;