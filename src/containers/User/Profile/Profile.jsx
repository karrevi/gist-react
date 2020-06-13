import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { update } from '../../../redux/actions/users';
import { Card, notification, Input, Form, Button } from 'antd';
import { IMG_URL } from '../../../api-config.js';


const Profile = (props) => {
    const history = useHistory();
    const onFinish = user => {
        update(user).then(() => {
            notification.success({ message: 'Datos actualizados' })
            // history.push()
        })
            .catch(error => {
                console.error(error)
                notification.error({ message: 'Error al intentar actualizar los datos' })
            })

    };

    console.log(props.user)
    return (
        <div className="user-layout">
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
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Image_default" src={IMG_URL + '/users/' + props.user?.image_path} />}
                >

                    <Button type="primary" htmlType="submit">
                        Actualizar foto
                        </Button>
                </Card>
            </Form>
        </div >
    )
}

const mapStateToProps = ({ user }) => ({ user: user.user });
export default connect(mapStateToProps)(Profile);