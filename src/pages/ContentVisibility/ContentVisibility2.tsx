import React from 'react';
import { Link } from 'react-router-dom';

import DummyBlog from '../../components/DummyBlog/DummyBlog';

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
            <nav>
                <ul>
                    <li>
                        <Link to="/contentvisibility1" title="Standard rendering">#1</Link>
                    </li>
                    <li>
                        <Link to="/contentvisibility2" title="Using content-visibility: auto">#2</Link>
                    </li>
                    <li>
                        <Link to="/contentvisibility3" title="Adding contain-intrinsic-size">#3</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <DummyBlog contentVisibilityAuto={true} containIntrinsicSize={false} />
    </React.Fragment>
);

export default ContentVisibility2;
