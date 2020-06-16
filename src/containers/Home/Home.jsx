import React, { useEffect, useState } from 'react';
import { getAll } from '../../redux/actions/snnipets';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { IMG_URL } from '../../api-config';
import './Home.scss';
import { Avatar, Tabs } from 'antd';
import { BranchesOutlined, StarFilled, CodeFilled, CommentOutlined } from '@ant-design/icons'


const { TabPane } = Tabs;

const Home = (props) => {
    useEffect(() => {
        getAll()
            .catch(console.error)
    }, [])

    const [state] = useState({
        size: 'small'
    })

    return (
        <span>
            <div className="container_gists_banner">
                <div className="container_gists_title">
                    <h1>¡Descubre todos los snnipets!</h1>
                </div>
            </div>
            <div className="snnipets">
                <div className="snnipets_layout">
                    <div className="snnipets_lg">
                    </div>
                    <nav className="reponav js-repo-nav">
                        <Tabs defaultActiveKey="1" type="card" size={state}>
                            <TabPane tab={<span><CodeFilled />
                        Snnipets</span>} key="1">
                                {
                                    props.snnipet?.map(snnipet =>
                                        <div className="gist-snnipets" key={snnipet?._id}>
                                            <div className="gits-snnipets-meta d-inline-bock width-full">
                                                <ul className="float-right h6">
                                                    <li className="d-inline-block mr-3">
                                                        <a className="muted-link" href="# "> <CodeFilled />file</a>
                                                    </li>
                                                    <li className="d-inline-block mr-3">
                                                        <a className="muted-link" href="# "> <BranchesOutlined /> forks
                            </a>
                                                    </li>
                                                    <li className="d-inline-block mr-3">
                                                        <a className="muted-link" href="# "> <CommentOutlined /> comentarios
                            </a>
                                                    </li>
                                                    <li className="d-inline-block mr-3">
                                                        <a className="muted-link" href="# "> <StarFilled /> stars
                            </a>
                                                    </li>
                                                </ul>
                                                <div className="float-left">
                                                    <div className="d-inline-block v-align-top mt-1">
                                                        <a className="d-inline-block" href="/profile"><Avatar img alt="Image_default" src={IMG_URL + '/users/' + props?.user?.image_path} />
                                                        </a>
                                                    </div>
                                                    <div className="d-inline-block">
                                                        <div>{props?.snnipet[0]?.user.name} / {snnipet.name}
                                                        </div>
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
        </span>
    )
}

const mapStateToProps = ({ snnipets }) => ({ snnipet: snnipets.snnipets });
export default connect(mapStateToProps)(Home);