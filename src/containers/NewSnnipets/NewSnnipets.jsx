import React from 'react';
import './NewSnnipets.scss';
import { Input } from 'antd';


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
                                    
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </span>
    )
}

export default NewSnnipets;