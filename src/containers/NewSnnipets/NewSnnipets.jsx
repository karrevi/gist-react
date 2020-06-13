import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { insert } from '../../redux/actions/snnipets';
import './NewSnnipets.scss';
import { Input, Select, Button, notification, Form } from 'antd';
import { useState } from 'react';


const NewSnnipets = (props) => {
    const history = useHistory();
    const { TextArea } = Input;
    const { Option } = Select;
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
            <div>
                <div className="container-lg px-3">
                    <h1>Comparte instantáneamente código, notas y fragmentos.</h1>
                </div>
            </div>
            <div className="container-lg px-3 new-discussion-timeline">
                <div className="repository-content gist-content">
                    <Form className="js-blod-form" id="new_gist" onFinish={handleSubmit}>
                        <div id="gists" className="js-gist-files">
                            <Input type="text" className="form-control input-block input-contrast" onChange={nameGist} name="gist[description]" value={gistName} aria-label="Gist description" placeholder="Basic usage" autoComplete="off" />
                        </div>
                        <div className="js-gist-file">
                            <div className="file js-code-editor container-preview show-code mx-lg-3">
                                <div className="file-header mb-2">
                                    <div className="input-group gist-filename-input">
                                        <Input type="text" className="form-control filename js-gist-filename js-blod-filename" value={nameExtension} onChange={extensionNew} placeholder="Filename including extension..." />
                                    </div>
                                </div>
                                <div className="commit-create position-relative">
                                    <TextArea rows={6} value={codeGist} onChange={codeNew} />
                                </div>
                            </div>
                        </div>
                        <div className="form-actions">
                            <Button type="primary" className="btn" htmlType="submit">Crear gist</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </span>
    )
}

const mapStateToProps = ({ user }) => ({ theUser: user.theUser });
export default connect(mapStateToProps)(NewSnnipets);