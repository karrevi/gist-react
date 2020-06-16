import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/users';


const Login = () => {
    const history = useHistory();
    const onFinish = user => {
        login(user).then(() => {
            notification.success({ message: 'Conectado', description: 'Conectado con éxito' })
            setTimeout(() => {
                history.push('/home')
            }, 1500);
        })
            .catch(error => {
                console.error(error)
                notification.error({
                    message: 'Error en login', description: 'Error al tratar de conectarte'
                })
            })
    }
    return (
        <span>
            <div className="container_gists_banner">
                <div className="container_gists_title">
                    <h1>Entra ahora...</h1>
                </div>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Email"
                    className="login_input"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'El email es requerido',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" id="success" />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    className="login_input"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'La contraseña es requerida',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Conectarse
                        </Button>
                </Form.Item>
            </Form>
        </span>
    )
}
export default Login;