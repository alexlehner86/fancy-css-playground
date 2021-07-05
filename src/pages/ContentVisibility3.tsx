import React from 'react';
import { Link } from 'react-router-dom';

import DummyBlog from '../components/DummyBlog/DummyBlog';

const ContentVisibility3: React.FunctionComponent = () => (
    <React.Fragment>
        <div className="info-box">
            <p>
                #3 Blog example
                with <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"
                    target="_blank"
                    rel="noreferrer noopener"
                >content-visibility</a> and
                with <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size"
                    target="_blank"
                    rel="noreferrer noopener"
                >contain-intrinsic-size</a>.
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
        <DummyBlog contentVisibilityAuto={true} containIntrinsicSize={true} />
    </React.Fragment>
);

export default ContentVisibility3;
