import React, { ChangeEvent, useState } from 'react';

import styles from './InlineSvg.module.css';
import { EnergyIcon } from '../../components/icons/EnergyIcon';
import { HeartIcon } from '../../components/icons/HeartIcon';

const InlineSvgPage: React.FunctionComponent = () => {
    const [selectedColor, setSelectedColor] = useState('#e25353');

    const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    }

    return (
        <div className={styles.page}>
            <h2>Flexible Styling of Inline SVGs</h2>
            <p>
                Inline SVGs can be dynamically styled with CSS. Pick a color for the buttons further below.
            </p>
            <h3>Color Picker</h3>
            <div className={styles.formField}>
                <input type="color" id="button-color" name="buttonColor" value={selectedColor} onChange={onColorChange} />
                <label htmlFor="button-color">Button Color</label>
            </div>
            <h3>Example 1: Icon Button</h3>
            <button type="button" className={styles.iconBtn} style={{ 'color': selectedColor }}>
                <HeartIcon />
            </button>
            <h3>Example 2: Button with Icon and Text</h3>
            <button type="button" className={styles.textBtn} style={{ 'color': selectedColor }}>
                <EnergyIcon />
                Energize
            </button>
        </div>
    );
};

export default InlineSvgPage;
