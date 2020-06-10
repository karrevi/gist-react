import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/users';

const Header = (props) => {
    return (
        <header className="header">
            {props.user ?
                <div className="privateZone">
                    <NavLink to='/home' exact>Inicio</NavLink>
                    <NavLink to='/newsnnipets' exact>Nuevo Snnipets</NavLink>
                    <NavLink to='/profile' exact>{props.user.name}</NavLink>
                    <a onClick={logout} exact>Cerrar Sesión</a>
                </div>
                :
                <div className="publicZone">
                    <NavLink to='/login' exact>Inicia Sesión</NavLink>
                    <NavLink to='/register' exact>Crea tu cuenta</NavLink>
                </div>
            }
        </header>
    )
}
const mapStateToProps = ({ user }) => ({ user: user.user })
export default connect(mapStateToProps)(Header);