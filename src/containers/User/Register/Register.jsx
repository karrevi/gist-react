import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Register.scss';
import { register } from '../../../redux/actions/users';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const onFinish = user => {
        register(user).then(() => {
            notification.success({ message: 'Usuario registrado', description: 'Usuario registrado con exito' })
            history.push('/login')
        })
            .catch(error => {
                console.error(error)
                notification.error({ message: 'Error en registro', description: 'Error al tratar de registrar ala usuario' })
            })
    }
    return (
        <span>
            <div className="container_gists_banner">
                <div className="container_gists_title">
                    <h1>Regístrate y empieza a compartir código...</h1>
                </div>
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Nombre"
                    className="register_input"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'El nombre es requerido',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    className="register_input"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'El email es requerido',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contraseña"
                    className="register_input"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'La contraseña es requerida',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Registrar
                    </Button>
                </Form.Item>
            </Form>
        </span>
    )
}

export default Register;