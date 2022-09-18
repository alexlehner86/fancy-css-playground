import React from 'react';

import styles from './HasPseudoClass.module.css';

const HasPseudoClass: React.FunctionComponent = () => {
    const assetsImgUrl = process.env.PUBLIC_URL + '/assets/img/';

    return (
        <div className={'default-container ' + styles.page}>
            <h2>Use Cases for :has pseudo-class</h2>
            <h3>Content Cards</h3>
            <ul className={styles.contentCards}>
                <li className={styles.card}>
                    <div>
                        <h4>Beautiful Gran Canaria</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam.
                        </p>
                    </div>
                    <img
                        src={assetsImgUrl + 'gran_canaria_mountains.jpg'}
                        alt="Mountainside view on Gran Canaria with the sea in the background"
                    />
                </li>
                <li className={styles.card}>
                    <div>
                        <h4>Is it Mars? Nope, Monument Valley!</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam.
                        </p>
                    </div>
                    <img
                        src={assetsImgUrl + 'monument_valley.jpg'}
                        alt="Red, rocky plains of Monument Valley"
                    />
                </li>
                <li className={styles.card}>
                    <div>
                        <h4>Eger River near Karlsbad, Czech Republic</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam.
                        </p>
                    </div>
                </li>
            </ul>
            <h3>Form with Reset Button</h3>
            <form action="#">
                <fieldset>
                    <legend>Filter Planets</legend>
                    <div>
                        <input id="checkbox-air" type="checkbox" />
                        <label htmlFor="checkbox-air">Breathable Air</label>
                    </div>
                    <div>
                        <input id="checkbox-water" type="checkbox" />
                        <label htmlFor="checkbox-water">Liquid Water</label>
                    </div>
                    <div>
                        <input id="checkbox-gravitation" type="checkbox" />
                        <label htmlFor="checkbox-gravitation">Bearable Gravitation</label>
                    </div>
                </fieldset>
                <button
                    type="reset"
                    title="Reset filter options"
                    aria-label="Reset filter options"
                >X</button>
            </form>
            <h3>Direct Child and Sibling Selector</h3>
            <ul className={styles.nestedList}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>
                    Sublist 1
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
                <li>Item 3</li>
            </ul>
        </div>
    );
}

export default HasPseudoClass;
