import React, { useEffect, useRef, useState } from 'react';

import { DIALOG_CANCEL_VALUE, DIALOG_CONFIRM_VALUE } from './DialogElement.const';
import styles from './DialogElement.module.css';

const DialogElement: React.FunctionComponent = () => {
    const favColorRef = useRef<HTMLSelectElement>(null)
    const favMovieRef = useRef<HTMLInputElement>(null)
    const formDialogRef = useRef<HTMLDialogElement>(null);
    const simpleDialogRef = useRef<HTMLDialogElement>(null);
    const [dialogFormData, setDialogFormData] = useState('');

    const onOpenFormDialogClick = () => {
        formDialogRef.current?.showModal();
    }
    const onFormDialogCancelClick = () => {
        formDialogRef.current?.close(DIALOG_CANCEL_VALUE);
    }
    const onOpenSimpleDialogClick = () => {
        simpleDialogRef.current?.showModal();
    }
    const onSimpleDialogOkClick = () => {
        simpleDialogRef.current?.close();
    }

    const isClickOutsideOfDialog = (dialogEl: HTMLDialogElement, event: React.MouseEvent): boolean => {
        // Get the coordinates of the click and check if it falls outside of the dialog’s rectangle.
        // If it does, then the user has clicked the backdrop and we close the dialog.
        const rect = dialogEl.getBoundingClientRect();
        return (event.clientY < rect.top || event.clientY > rect.bottom ||
            event.clientX < rect.left || event.clientX > rect.right);
    }
    const onFormDialogContainerClick = (event: React.MouseEvent) => {
        const formDialogEl = formDialogRef.current;
        if (formDialogEl && isClickOutsideOfDialog(formDialogEl, event)) {
            formDialogEl.close(DIALOG_CANCEL_VALUE);
        }
    }
    const onSimpleDialogContainerClick = (event: React.MouseEvent) => {
        const simpleDialogEl = simpleDialogRef.current;
        if (simpleDialogEl && isClickOutsideOfDialog(simpleDialogEl, event)) {
            simpleDialogEl.close();
        }
    }

    useEffect(() => {
        // Manually set close event listener for dialog, as React doesn't support this event yet.
        const handleDialogClose = () => {
            if (formDialogRef.current?.returnValue === DIALOG_CONFIRM_VALUE) {
                const favColor = favColorRef.current?.value ?? '';
                const favMovie = favMovieRef.current?.value ?? '';
                setDialogFormData(`You selected the color "${favColor}" and entered the movie "${favMovie}".`);
            }
        };
        const dialogHtmlElement = formDialogRef.current;
        dialogHtmlElement?.addEventListener('close', handleDialogClose);
        return () => dialogHtmlElement?.removeEventListener('close', handleDialogClose);
    });

    return (
        <div className={styles.page}>
            <h2>
                Testing the Native Dialog Element
            </h2>
            <p>
                The native dialog element was added in HTML 5.2 and represents a part of an application that
                a user interacts with to perform a task, for example a dialog box, inspector, or window.
            </p>
            <button
                type="button"
                className={styles.primaryBtn}
                onClick={onOpenFormDialogClick}
            >
                Open Modal Dialog
            </button>
            <button
                type="button"
                onClick={onOpenSimpleDialogClick}
            >
                Open Dialog (no aria-modal)
            </button>
            <p role="status">
                {dialogFormData}
            </p>
            <dialog
                aria-labelledby='dialog-personal-info-heading'
                aria-modal="true"
                ref={formDialogRef}
                onClick={onFormDialogContainerClick}
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
                        <button
                            type="button"
                            onClick={onFormDialogCancelClick}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={styles.primaryBtn}
                            value={DIALOG_CONFIRM_VALUE}
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </dialog>
            <dialog
                ref={simpleDialogRef}
                onClick={onSimpleDialogContainerClick}
            >
                <p>
                    When a native dialog element is opened, the content outside of the dialog should be made inert for all
                    users, including screen readers. Setting the attribute aria-modal="true" should not be necessary.
                </p>
                <button
                    type="button"
                    onClick={onSimpleDialogOkClick}
                >
                    OK
                </button>
            </dialog>
            <p>
                Find out more about the dialog element on&nbsp;
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="_blank" rel="noreferrer">MDN Web Docs</a>.
            </p>
        </div>
    );
};

export default DialogElement;
