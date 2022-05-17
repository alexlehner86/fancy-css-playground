import React from 'react';

import styles from './FileUpload.module.css';

const FileUpload: React.FunctionComponent = () => (
    <div className={styles.page}>
        <h2>
            Styled File Upload
        </h2>
        <form action="#">
            <label htmlFor="filepicker" className={styles.filePicker}>
                <span>PDF hochladen</span>
                <input id="filepicker" type="file" accept=".pdf" aria-describedby="filename"></input>
            </label>
            <span id="filename">beispieldatei.pdf</span>
        </form>
        {/* https://scottaohara.github.io/a11y_styled_form_controls/src/file-upload/ */}
    </div>
);

export default FileUpload;
