'use client';

import { Fragment, useState } from "react";
import { uploadVideo } from "../firebase/functions";
import styles from './upload.page.module.css'


export default function Upload() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);
        if (file) {
            setSelectedFile(file);
        }
    }

    const handleSubmit  = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!selectedFile) {
            alert('Please select a file first.');
            return;
        }

        try {
            const response = await uploadVideo(selectedFile, description, title);
            alert(`File uploaded successfully. Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Failed to upload file: ${error}`)
        }
    };
    
    return (
        <form method="post" onSubmit={handleSubmit}>
            <Fragment>
                <h1>Upload Page</h1>
                <input id="upload" type="file" accept="video/*" onChange={handleFileChange}/>
                <hr />
                <label className={styles.inputBox}>
                Title: <input name="title" onChange={e => setTitle(e.target.value)}/>
                </label>
                <hr />
                <label className={styles.inputBox}>
                Description: <input name="description" onChange={e => setDescription(e.target.value)}/>
                </label>
                <hr />
                <button type="submit">Submit form</button>
            </Fragment>
        </form>
    )
}