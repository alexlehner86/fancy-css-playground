import React from 'react';

import DummyBlog from '../components/DummyBlog/DummyBlog';

const ContentVisibility1: React.FunctionComponent = () => (
    <React.Fragment>
        <div className="info-box">
            <p>
                #1 Blog example
                without <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
                    target="_blank"
                    rel="noreferrer noopener"
                >content-visibility</a>.
            </p>
        </div>
        <DummyBlog contentVisibilityAuto={false} />
    </React.Fragment>
);

export default ContentVisibility1;
