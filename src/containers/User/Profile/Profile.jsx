import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMG_URL } from '../../../api-config.js';
import { update } from '../../../redux/actions/users';
import { Card, notification, Input, Form, Button } from 'antd';
import './Profile.scss';


const Profile = (props) => {
    const history = useHistory();
    const onFinish = user => {
        update(user).then(() => {
            notification.success({ message: 'Datos actualizados' })
            history.push('/profile')
        })
            .catch(error => {
                console.error(error)
                notification.error({ message: 'Error al intentar actualizar los datos' })
            })

    };

    return (
        <span>
            <div className="container_gists_banner">
                <div className="container_gists_title">
                    <h1>Modifica tus datos...</h1>
                </div>
            </div>
            <div className="user-layout">
                <div className="user_layout_left">
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="Image_default" src={IMG_URL + '/users/' + props.user?.image_path} />}
                    ></Card>
                    <div className="ant-card-body"><Button type="primary" htmlType="submit">
                        Actualizar foto
                </Button>
                    </div>
                </div>
                <div className="user_layout_right">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={console.error}
                    >
                        <Form.Item
                            label="Nombre"
                            name="name"
                            initialValue={props.user?.name}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            initialValue={props.user?.email}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Contraseña"
                            name="password"
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Actualizar Perfil
                    </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        </span>
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);