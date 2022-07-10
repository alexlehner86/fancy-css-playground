import React, { useRef } from 'react';

import styles from './DialogElement.module.css';

const DialogElement: React.FunctionComponent = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const onOpenDialogClick = () => {
        dialogRef.current?.showModal();
    }

    return (
        <div className={styles.page}>
            <h2>
                Testing the Native Dialog Element
            </h2>
            <button
                type="button"
                onClick={onOpenDialogClick}
            >
                Open Dialog
            </button>
            <dialog ref={dialogRef}>
                <h3>Personal Information</h3>
                <form method="dialog">
                    <label htmlFor="favColor">Favorite color:</label>
                    <select id="favColor">
                        <option value="default">Choose...</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                    </select>
                    <div className={styles.buttonContainer}>
                        <button value="cancel">Cancel</button>
                        <button id="confirmBtn" value="default">Confirm</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default DialogElement;
