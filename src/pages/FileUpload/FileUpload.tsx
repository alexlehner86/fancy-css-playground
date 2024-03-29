import React, { useState } from 'react';

import styles from './FileUpload.module.css';

const FileUpload: React.FunctionComponent = () => {
    const [selectedFile, setSelectedFile] = useState('No file selected');
    const onFilePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);
        if (files.length > 0) {
            setSelectedFile(files[0].name);
        }
    }

    return (
        <div className={styles.page}>
            <h2>
                Form with Styled File Input
            </h2>
            <form action="#">
                <div className={styles.filePickerRow}>
                    <label htmlFor="filepicker" className={styles.filePicker}>
                        <span>Upload PDF</span>
                        <input
                            id="filepicker"
                            type="file"
                            accept=".pdf"
                            aria-describedby="selected-file"
                            onChange={event => onFilePickerChange(event)}
                        />
                    </label>
                    <p id="selected-file">{selectedFile}</p>
                </div>
            </form>
            <h2>
                Form with Standard File Input
            </h2>
            <form action="#">
                <label htmlFor="filepicker-standard">
                    <span>Upload PDF:&nbsp;</span>
                    <input id="filepicker-standard" type="file" accept=".pdf"></input>
                </label>
            </form>
        </div>
    );
};

export default FileUpload;
