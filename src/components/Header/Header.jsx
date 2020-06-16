import React from 'react';
import './Header.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/users';
import logo from '../../img/logo.jpg';

const Header = (props) => {
    const history = useHistory();

    const home = () => {
        history.push('/home');
    }

    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="Logo app" onClick={home} />
            </div>
            {props.user ?
                <div className="header_private_zone">
                    <NavLink to='/newsnnipets' exact>Nuevo Snnipets</NavLink>
                    <NavLink to='/profile' exact>{props.user.name}</NavLink>
                    <NavLink to='/login' onClick={logout} exact>Cerrar Sesión</NavLink>
                </div>
                :
                <div className="header_public_zone">
                    <NavLink to='/login' exact>Inicia Sesión</NavLink>
                    <NavLink to='/register' exact>Crea tu cuenta</NavLink>
                </div>
            }
        </div>
    )

}
const mapStateToProps = ({ user }) => ({ user: user.user })
export default connect(mapStateToProps)(Header);