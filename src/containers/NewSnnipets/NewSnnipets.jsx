import React from 'react';
import './NewSnnipets.scss';
import { Input, Select, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const NewSnnipets = () => {

    return (
        <span>
            <div className="gist-welcome gist-banner text-center">
                <div className="container-lg px-3">
                    <h1>Comparte instantáneamente código, notas y fragmentos.</h1>
                </div>
            </div>
            <div className="container-lg px-3 new-discussion-timeline">
                <div className="repository-content gist-content">
                    <form className="js-blod-form" id="new_gist" arial-label="create gist">
                        <div id="gists" className="js-gist-files">
                            <Input type="text" className="form-control input-block input-contrast" name="gist[description]" value aria-label="Gist description" placeholder="Basic usage" autoComplete="off" />
                        </div>
                        <div className="js-gist-file">
                            <div className="file js-code-editor container-preview show-code mx-lg-3">
                                <div className="file-header mb-2">
                                    <div className="input-group gist-filename-input">
                                        <Input type="text" className="form-control filename js-gist-filename js-blod-filename" placeholder="Filename including extension..." />
                                    </div>
                                    <div className="file-actions d-none d-md--flex">
                                        <Select style={{ width: 75 }}>
                                            <Option key="wrap">Wrap</Option>
                                            <Option key="tab">Tabs</Option>
                                        </Select>
                                        <Select style={{ width: 75 }}>
                                            <Option key="2">2</Option>
                                            <Option key="4">4</Option>
                                        </Select>
                                        <Select style={{ width: 75 }}>
                                            <Option key="off">No wrap</Option>
                                            <Option key="on">Soft wrap</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="commit-create position-relative">
                                    <TextArea rows={6} />
                                </div>
                            </div>
                        </div>
                        <div className="form-actions">
                            <Button type="primary" className="btn">Crear gist</Button>
                        </div>
                    </form>
                </div>
            </div>
        </span>
    )
}

export default NewSnnipets;