import React, { useEffect } from 'react';
import { getAll } from '../../redux/actions/snnipets';
import { connect } from 'react-redux';
import './Home';

const Home = (props) => {
    // console.log(props)
    useEffect(() => {
        getAll()
            .catch(console.error)
    }, [])
    return (
        <div className="snnipets">
            {/* <p>Aquí se mostrarán todos los snnipets!</p> */}
            <p>{props.snnipets?.snnipets.name}</p>
        </div>
    )
}

const mapStateToProps = ({ snnipets }) => ({ snnipet: snnipets.snnipets });
export default connect(mapStateToProps)(Home);