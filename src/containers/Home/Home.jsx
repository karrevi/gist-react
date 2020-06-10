import React, { useEffect, useState } from 'react';
import { getAll } from '../../redux/actions/snnipets';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './Home.scss';
import { Avatar, Tabs } from 'antd';
import { BranchesOutlined, StarFilled, CodeFilled, CommentOutlined } from '@ant-design/icons'


const { TabPane } = Tabs;

const Home = (props) => {
    useEffect(() => {
        getAll()
            .catch(console.error)
    }, [])

    const [state, setState] = useState({
        size: 'small'
    })

    const onChange = (e) => {
        setState({ size: e.target.value });
    }

    return (
        <div className="snnipets">
            <div className="snnipets_layout">
                <div className="snnipets_lg">
                    <h1 className="">Descubre todos los gists</h1>
                </div>
                <nav className="reponav js-repo-nav">
                    <Tabs defaultActiveKey="1" type="card" size={state}>
                        <TabPane tab={<span><CodeFilled />
                        Todos gists</span>} key="1">
                            {
                                props.snnipet?.map(snnipet =>
                                    <div className="gist-snnipets" key={snnipet?._id}>
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
                                            <div className="float-left">
                                                <div className="d-inline-block v-align-top mt-1">
                                                    <a className="d-inline-block"><Avatar src={props?.snnipet[0]?.user.image_path} />
                                                    </a>
                                                </div>
                                                <div className="d-inline-block">
                                                    <span>
                                                        <a data-hovercard-type="user">{props?.snnipet[0]?.user.name}</a> / <a>{snnipet.name}</a>
                                                    </span>
                                                    <div className="text-gray">
                                                        Creado <Moment fromNow>2020-06-19T12:59-0500</Moment>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="js-gist-file-update-container js-task-list-container file-box">
                                            <div id="file-paste" className="file">
                                                <div itempro="text" className="Box-body p-0 blod-wrapper data type-text">{snnipet.code_snnipets}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </TabPane>
                        <TabPane tab={<span><BranchesOutlined />
                         Forked</span>} key="2">
                        </TabPane>
                        <TabPane tab={<span><StarFilled />
                         Forked</span>} key="3">
                        </TabPane>
                    </Tabs>
                </nav >
            </div>

        </div >
    )
}

const mapStateToProps = ({ snnipets }) => ({ snnipet: snnipets.snnipets });
export default connect(mapStateToProps)(Home);