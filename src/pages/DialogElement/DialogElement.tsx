import React, { useEffect, useRef, useState } from 'react';

import { DIALOG_CANCEL_VALUE, DIALOG_CONFIRM_VALUE } from './DialogElement.const';
import styles from './DialogElement.module.css';

const DialogElement: React.FunctionComponent = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const favColorRef = useRef<HTMLSelectElement>(null)
    const favMovieRef = useRef<HTMLInputElement>(null)
    const [dialogFormData, setDialogFormData] = useState('');

    const onOpenDialogButtonClick = () => {
        dialogRef.current?.showModal();
    }
    const onDialogContainerClick = (event: any) => {
        // Get the coordinates of the click and check if it falls outside of the dialog’s rectangle.
        // If it does, then the user has clicked the backdrop and we close the dialog.
        const rect = dialogRef.current?.getBoundingClientRect();
        if (rect && (event.clientY < rect.top || event.clientY > rect.bottom ||
            event.clientX < rect.left || event.clientX > rect.right)) {
            dialogRef.current?.close();
        }
    }
    const onCancelButtonClick = () => {
        const dialogHtmlElement = dialogRef.current;
        if (dialogHtmlElement) {
            dialogHtmlElement.returnValue = DIALOG_CANCEL_VALUE;
            dialogHtmlElement.close();
        }
    }

    useEffect(() => {
        // Manually set close event listener for dialog, as React doesn't support this event yet.
        const handleDialogClose = () => {
            if (dialogRef.current?.returnValue === DIALOG_CONFIRM_VALUE) {
                const favColor = favColorRef.current?.value ?? '';
                const favMovie = favMovieRef.current?.value ?? '';
                setDialogFormData(`You selected the color "${favColor}" and entered the movie "${favMovie}".`);
            }
        };
        const dialogHtmlElement = dialogRef.current;
        dialogHtmlElement?.addEventListener('close', handleDialogClose);
        return () => dialogHtmlElement?.removeEventListener('close', handleDialogClose);
    });

    return (
        <div className={styles.page}>
            <h2>
                Testing the Native Dialog Element
            </h2>
            <button
                type="button"
                onClick={onOpenDialogButtonClick}
            >
                Open Modal Dialog
            </button>
            <p role="status">
                {dialogFormData}
            </p>
            <dialog
                aria-labelledby='dialog-personal-info-heading'
                ref={dialogRef}
                onClick={onDialogContainerClick}
            >
                <h3 id="dialog-personal-info-heading">Personal Information</h3>
                <p>Please tell me more about you. I want to get to know you better.</p>
                <form method="dialog" onClick={event => event.stopPropagation()}>
                    <div className={styles.formField}>
                        <label htmlFor="favColor">Favorite color:</label>
                        <select id="favColor" ref={favColorRef}>
                            <option value="">Choose...</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </select>
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="favMovie">Favorite movie:</label>
                        <input id="favMovie" type="text" ref={favMovieRef} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={onCancelButtonClick}>Cancel</button>
                        <button className={styles.primaryBtn} value={DIALOG_CONFIRM_VALUE}>Confirm</button>
                    </div>
                </form>
            </dialog>
            <p>
                Find out more about the dialog element on&nbsp;
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="_blank" rel="noreferrer">MDN Web Docs</a>.
            </p>
        </div>
    );
};

export default DialogElement;
