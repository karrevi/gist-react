import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <header className="header">
            <NavLink to='/login' exact>Inicia Sesión</NavLink>
            <NavLink to='/register' exact>Crea tu cuenta</NavLink>
        </header>
    )
}
const mapStateToProps = ({ user }) => ({ user: user.user })
export default connect(mapStateToProps)(Header);