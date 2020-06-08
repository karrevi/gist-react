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
                    <div className="">
                        <NavLink to='/profile' exact>{props.user.name}</NavLink>
                        <NavLink to={logout} exact>Cerrar Sesión</NavLink>
                    </div>
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