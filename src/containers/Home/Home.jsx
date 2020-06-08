import React, { useEffect } from 'react';
import { getAllSnnipets } from '../../redux/actions/snnipets';
import { connect } from 'react-redux';
import './Home';

const Home = (props) => {
    useEffect(() => {
        getAllSnnipets()
            .catch(console.error)
    }, [])
    return (
        <div className="snnipets">
            <p>Aquí se mostrarán todos los snnipets!</p>
        </div>
    )
}

const mapStateToProps = ({ snnipets }) => ({ snnipets: snnipets.snnipets });
export default connect(mapStateToProps)(Home);