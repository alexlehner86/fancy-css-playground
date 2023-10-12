import React from 'react';

import styles from './ScrollPadding.module.css';

const ScrollPadding: React.FunctionComponent = () => {
    return (
        <>
            <div className={'default-container ' + styles.page}>
                <h2>Conform to WCAG 2.4.11 Focus Not Obscured (Minimum)</h2>
                <p>
                    This website uses the CSS
                    property <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding">scroll-padding</a> to
                    ensure that focused interactive elements (like links) are not obscured by sticky or fixed content.
                </p>
                <p>
                    On this page, the header is fixed to the top
                    using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">position: fixed</a>.
                    This is really awesome!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam.
                </p>
                <p>
                    This website uses the CSS
                    property <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding">scroll-padding</a> to
                    ensure that focused interactive elements (like links) are not obscured by sticky or fixed content.
                </p>
                <p>
                    On this page, the header is fixed to the top
                    using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">position: fixed</a>.
                    This is really awesome!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam.
                </p>
                <p>
                    This website uses the CSS
                    property <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding">scroll-padding</a> to
                    ensure that focused interactive elements (like links) are not obscured by sticky or fixed content.
                </p>
                <p>
                    On this page, the header is fixed to the top
                    using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">position: fixed</a>.
                    This is really awesome!
                </p>
                <p>
                    This website uses the CSS
                    property <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding">scroll-padding</a> to
                    ensure that focused interactive elements (like links) are not obscured by sticky or fixed content.
                </p>
                <p>
                    On this page, the header is fixed to the top
                    using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">position: fixed</a>.
                    This is really awesome!
                </p>
            </div>
            <aside className={styles.bottomAside}>
                Hi, I'm additional content that sticks to the bottom of the page.
            </aside>
        </>
    );
}

export default ScrollPadding;
