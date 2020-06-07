import React from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/users';

const Login = () => {
    const history = useHistory();
    const onFinish = user => {
        login(user).then(() => {
            notification.success({ message: 'Conectado', description: 'Conectado con éxito' })
            setTimeout(() => {
                history.push('/')
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
        <div className="formContainer">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your contraseña!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="contraseña"
                        placeholder="contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
        </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Conectarse
                        </Button>
                        Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};


export default Login;
