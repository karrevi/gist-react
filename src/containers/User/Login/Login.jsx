import React from 'react';
import { Form, Input, Button, Checkbox, notification, Layout, Breadcrumb } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/users';


const { Content, Footer } = Layout;
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
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}> */}
                <div className="site-layout-content">
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
                                    type="password"
                                    placeholder="contraseña"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Conectarse
                        </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                {/* </Breadcrumb> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};
export default Login;