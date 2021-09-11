import React from 'react';

import styles from './PaintApi.module.css';

const PaintApi: React.FunctionComponent = () => (
    <div className={'default-container ' + styles.container}>
        <p className={'feature-hint ' + styles.supportsPaintApi}>
            <strong>Your browser supports the Painting API.</strong>
        </p>
        <p className={'feature-hint ' + styles.noPaintApiSupport}>
            <strong>Your browser doesn't support the Painting API.</strong>
        </p>
        <h2>
            Magical Styling with Houdini
        </h2>
        <p>
            Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power
            to extend CSS by hooking into the styling and layout process of a browser’s rendering engine. Houdini
            is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers
            to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to
            be implemented natively in browsers.
        </p>
        <h2>
            Paint whatever you like
        </h2>
        <p>
            The <span className="code">CSS Painting API</span> — part of the CSS Houdini umbrella of APIs — allows developers
            to write JavaScript functions that can draw directly into an element's background, border, or content.
        </p>
        <textarea
            name="example-textarea"
            id="checkerboard-textarea"
            rows={5}
            autoComplete="off"
            spellCheck="false"
            placeholder="checkmate"
        ></textarea>
        <h2>
            Smarter custom properties with Houdini
        </h2>
        <p>
            The <span className="code">Properties &amp; Values API</span> allows you to define the syntax of a custom property,
            its initial value and whether it inherits its parent's value. Registering a custom property enables you to animate it
            as the browser now knows how to interpolate its value. Important: Once defined, you can't update an existing registered property,
            and trying to re-register a property will throw an error.
        </p>
        <p>
            There are two ways to register a custom property: Via the JavaScript method <span className="code">CSS.registerProperty()</span> or
            using the <span className="code">@property</span> CSS at-rule. Both are still experimental features and only partially supported
            by modern browsers (e.g. no support in Firefox and Safari).
        </p>
    </div>
);

export default PaintApi;
