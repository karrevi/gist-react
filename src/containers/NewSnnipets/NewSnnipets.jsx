import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { insert } from '../../redux/actions/snnipets';
import './NewSnnipets.scss';
import { Input, Button, notification, Form } from 'antd';

const NewSnnipets = () => {
    const history = useHistory();
    const { TextArea } = Input;
    const [gistName, setGistName] = useState("");
    const [codeGist, setCodeGist] = useState("");
    const [nameExtension, setNameExtension] = useState("");

    const nameGist = e => {
        setGistName(e.target.value)
    }
    const codeNew = e => {
        setCodeGist(e.target.value)
    }
    const extensionNew = e => {
        setNameExtension(e.target.value)
    }
    const handleSubmit = e => {
        insert(gistName,
            nameExtension,
            codeGist)
            .then(res => {
                notification.success({ message: 'Snnipet creado' })
                setTimeout(() => {
                    history.push('/home')
                }, 2000);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <span>
            <div className="container_gists_banner">
                <div className="container_gists_title">
                    <h1>Comparte instantáneamente código, notas y fragmentos.</h1>
                </div>
            </div>
            <Form className="js-blod-form" id="new_gist" onFinish={handleSubmit}>
                <div id="gists" className="js-gist-files snippet_container">
                    <Input type="text" className="form-control input-block input-contrast snippet_input" onChange={nameGist} name="gist[description]" value={gistName} aria-label="Gist description" placeholder="Título de tu gists" autoComplete="off" />
                </div>
                <div className="js-gist-file snippet_file">
                    <div className="file js-code-editor container-preview show-code mx-lg-3">
                        <div className="file-header mb-2">
                            <div className="input-group gist-filename-input">
                                <Input type="text" className="form-control filename js-gist-filename js-blod-filename snippet_input" value={nameExtension} onChange={extensionNew} placeholder="Fichero y extension del gist" />
                            </div>
                        </div>
                        <div className="commit-create position-relative">
                            <TextArea className="snippet_input" rows={6} value={codeGist} onChange={codeNew} placeholder="Pega tu código aquí..." />
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <Button type="primary" className="btn" htmlType="submit">Crear gist</Button>
                </div>
            </Form>
        </span>
    )
}

const mapStateToProps = ({ user }) => ({ theUser: user.theUser });
export default connect(mapStateToProps)(NewSnnipets);