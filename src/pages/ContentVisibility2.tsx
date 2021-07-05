import React from 'react';

import DummyBlog from '../components/DummyBlog/DummyBlog';

const ContentVisibility2: React.FunctionComponent = () => (
    <React.Fragment>
        <div className="info-box">
            <p>
                #2 Blog example
                with <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
                    target="_blank"
                    rel="noreferrer noopener"
                >content-visibility</a>.
            </p>
        </div>
        <DummyBlog contentVisibilityAuto={true} />
    </React.Fragment>
);

export default ContentVisibility2;
