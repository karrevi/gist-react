import React, { useEffect } from 'react';
import { getAll } from '../../redux/actions/snnipets';
import { connect } from 'react-redux';
import './Home.scss';
import { BranchesOutlined, StarFilled, CodeFilled, CommentOutlined } from '@ant-design/icons'

const Home = (props) => {
    useEffect(() => {
        getAll()
            .catch(console.error)
    }, [])

    return (
        <div className="snnipets">
            <div className="snnipets_layout">
                <div className="snnipets_lg">
                    <h1 className="">Descubre todos los gists</h1>
                </div>
                <nav className="reponav js-repo-nav">
                    <a className="select-navigation-item select reponav-item" NavLink to=''><CodeFilled />Todos gists</a>
                    <a className="select-navigation-item reponav-item" NavLink to=''> <BranchesOutlined />Forked</a>
                    <a className="select-navigation-item reponav-item" NavLink to=''><StarFilled />Starred</a>
                </nav >
            </div>
            <div className="gist-snnipets">
                <div className="gits-snnipets-meta d-inline-bock width-full">
                    <ul className="float-right h6">
                        <li className="d-inline-block mr-3">
                            <a className="muted-link" NavLink to=""> <CodeFilled />file</a>
                        </li>
                        <li className="d-inline-block mr-3">
                            <a className="muted-link" NavLink to=""> <BranchesOutlined /> forks
                            </a>
                        </li>
                        <li className="d-inline-block mr-3">
                            <a className="muted-link" NavLink to=""> <CommentOutlined /> comentarios
                            </a>
                        </li>
                        <li className="d-inline-block mr-3">
                            <a className="muted-link" NavLink to=""> <StarFilled /> stars
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            {props.snnipet?.map(snnipet =>
                <div className="snnipet" key={snnipet?._id}>
                    <p>{snnipet.name}</p>
                    <p>{snnipet.code_snnipets}</p>
                    <p>{snnipet.extension}</p>
                </div>
            )}

        </div>
    )
}

const mapStateToProps = ({ snnipets }) => ({ snnipet: snnipets.snnipets });
export default connect(mapStateToProps)(Home);