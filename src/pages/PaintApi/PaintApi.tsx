import React from 'react';

import styles from './PaintApi.module.css';

const PaintApi: React.FunctionComponent = () => (
    <div className={styles.container}>
        <h2 className={styles.headline_stroke}>
            Paint API rulez
        </h2>
        <p>
            The CSS Painting API — part of the CSS Houdini umbrella of APIs — allows developers to write
            JavaScript functions that can draw directly into an element's background, border, or content.
        </p>
        <h2 className={styles.headline_stroke}>
            Magical Styling with Houdini
        </h2>
        <p>
            Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power
            to extend CSS by hooking into the styling and layout process of a browser’s rendering engine. Houdini
            is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers
            to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to
            be implemented natively in browsers.
        </p>
    </div>
);

export default PaintApi;
