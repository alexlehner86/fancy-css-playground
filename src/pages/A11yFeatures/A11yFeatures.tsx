import React, { useState } from 'react';
import styles from './A11yFeatures.module.css';

const A11yFeatures: React.FunctionComponent = () => {
    const [isPanel1Visible, setIsPanel1Visible] = useState(false);
    const [isPanel2Visible, setIsPanel2Visible] = useState(false);

    return (
        <div className={'default-container ' + styles.page}>
            <h2>Accessibility Features</h2>
            <h3>Visible focus for keyboard users only</h3>
            <p>
                Most blind users and many users with motor disabilities navigate websites with a keyboard. They depend on
                strong visual indicators (e.g. an outline) that highlight the element that currently has keyboard focus.
                The CSS pseudo-class <span className="code">:focus</span> is usually used to set focus styles for an element.
                These styles are also applied when a user clicks an element with a mouse or taps it on their smartphone screen,
                which can irritate or confuse some users. Talk about: aesthetics vs. accessibility.
            </p>
            <p>
                Luckily, CSS Selector Level 4 has introduced the <span className="code">:focus-visible</span> pseudo-class.
                Its styles are applied when an element receives focus and the user agent determines via heuristics that the focus
                should be made evident on the element. In other words: Only when they are needed, e.g. for users navigating via keyboard.
            </p>
            <h4>Example with :focus pseudo-class</h4>
            <form>
                <label htmlFor="fav-color-1">Favorite Color</label>
                <input id="fav-color-1" type="text" placeholder="red, green etc." />
            </form>
            <button
                className={styles.expansionPanelHeader}
                aria-expanded={isPanel1Visible}
                aria-controls="panel1"
                onClick={() => setIsPanel1Visible(!isPanel1Visible)}
            >
                <span aria-hidden="true">&gt;</span> More Facts (always displays focus indicator)
            </button>
            <p id="panel1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h4>Example with :focus-visible pseudo-class</h4>
            <form>
                <label htmlFor="fav-color-2">Favorite Color</label>
                <input id="fav-color-2" type="text" placeholder="red, green etc." className={styles.keyboardOnly} />
            </form>
            <button
                className={styles.expansionPanelHeader + ' ' + styles.keyboardOnly}
                aria-expanded={isPanel2Visible}
                aria-controls="panel2"
                onClick={() => setIsPanel2Visible(!isPanel2Visible)}
            >
                <span aria-hidden="true">&gt;</span> More Facts (only with keyboard navigation)
            </button>
            <p id="panel1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <h3>No more motion sickness</h3>
            <p className={'feature-hint ' + styles.prefersReducedMotion}>
                According to your system settings, you prefer <strong>reduced motion</strong>.
            </p>
            <p className={'feature-hint ' + styles.noMotionPreference}>
                According to your system settings, you have <strong>no motion preference</strong>.
            </p>
            <p>
                The <span className="code">prefers-reduced-motion</span> CSS media feature is used to detect if the user has requested
                that the system minimize the amount of non-essential motion it uses.
            </p>
            <p className={styles.linkContainer}>
                <a
                    className={styles.prominentLink}
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
                    target="_blank"
                    rel="noreferrer noopener"
                >Find out more</a>
            </p>
        </div>
    );
}

export default A11yFeatures;
