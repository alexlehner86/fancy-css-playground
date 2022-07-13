import React, { useEffect, useRef } from 'react';

import styles from './DialogElement.module.css';

const DialogElement: React.FunctionComponent = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        // Manually set close event listener for dialog, as React doesn't support this event yet.
        dialogRef.current?.addEventListener('close', () => {
            console.warn('closed dialog ' + dialogRef.current?.returnValue);
        });
    });

    // https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element
    // https://blog.logrocket.com/using-the-dialog-element/

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
                Open Modal Dialog
            </button>
            <dialog ref={dialogRef}>
                <h3>Personal Information</h3>
                <p>Please tell me more about you. I want to get to know you better.</p>
                <form method="dialog">
                    <div className={styles.formField}>
                        <label htmlFor="favColor">Favorite color:</label>
                        <select id="favColor">
                            <option value="default">Choose...</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </select>
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="favMovie">Favorite movie:</label>
                        <input id="favMovie" type="text" />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button value="cancel">Cancel</button>
                        <button className={styles.primaryBtn} value="confirm">Confirm</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default DialogElement;
