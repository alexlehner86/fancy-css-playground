import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FunctionComponent = () => (
    <div className="default-container no-center">
        <h2>Table of Contents</h2>
        Welcome to my Fancy CSS Playground!
        <ul>
            <li>
                <Link to="/a11yfeatures">Accessibility Features</Link>
            </li>
            <li>
                <Link to="/paintapi">CSS Painting API and Properties &amp; Values API</Link>
            </li>
            <li>
                Render optimization with content-visibility
                <ol>
                    <li>
                        <Link to="/contentvisibility1">Standard rendering</Link>
                    </li>
                    <li>
                        <Link to="/contentvisibility2">Using content-visibility: auto</Link>
                    </li>
                    <li>
                        <Link to="/contentvisibility3">Adding contain-intrinsic-size</Link>
                    </li>
                </ol>
            </li>
            <li>
                <Link to="/fileupload">Styled File Upload</Link>
            </li>
            <li>Other stuff, coming soon...</li>
        </ul>
    </div>
);

export default Home;
