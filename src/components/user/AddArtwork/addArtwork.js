/* src/App.js */
import React, { useEffect, useState } from 'react'
import firebase from "gatsby-plugin-firebase"
import ImageUploader from 'react-images-upload';


const initialState = {
    name: '',
    description: '',
    availability: '',
    stil: '',
    price: '',
    medium: '',
    height: '',
    width: '',
    instaLink: ''
}

const AddArtwork = (props) => {


    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const [image, setImage] = useState(null)



    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }



    function addArtwork() {

        uploadImage();
        // firebase
        //     .firestore()
        //     .collection("Artworks").add({
        //         ...formState
        //     })
        //     .then(function (docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function (error) {
        //         console.error("Error adding document: ", error);
        //     });
    }

    function uploadImage() {
        // File or Blob named mountains.jpg
        var storageRef = firebase.storage().ref();
        var file = image

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });

    }

    function onImage(e) {
        setImage(e[0])
    }



    return (
        <div style={styles.container}>
            <input
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
                placeholder="Name"
            />
            <input
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
            <input
                onChange={event => setInput('availability', event.target.value)}
                style={styles.input}
                value={formState.availability}
                placeholder="Availability"
            />
            <input
                onChange={event => setInput('stil', event.target.value)}
                style={styles.input}
                value={formState.stil}
                placeholder="stil"
            />
            <input
                onChange={event => setInput('price', event.target.value)}
                style={styles.input}
                value={formState.price}
                placeholder="price"
            />
            <input
                onChange={event => setInput('medium', event.target.value)}
                style={styles.input}
                value={formState.medium}
                placeholder="medium"
            />
            <input
                onChange={event => setInput('width', event.target.value)}
                style={styles.input}
                value={formState.width}
                placeholder="width"
            />
            <input
                onChange={event => setInput('height', event.target.value)}
                style={styles.input}
                value={formState.height}
                placeholder="height"
            />
            <input
                onChange={event => setInput('instaLink', event.target.value)}
                style={styles.input}
                value={formState.instaLink}
                placeholder="Instagram Link"
            />
            <ImageUploader
                withPreview={true}
                withIcon={true}
                buttonText='Choose images'
                onChange={onImage}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

            <button style={styles.button} onClick={addArtwork}>Create Artwork</button>
            {
                todos.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} style={styles.todo}>
                        <p style={styles.todoName}>{todo.name}</p>
                        <p style={styles.todoDescription}>{todo.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default AddArtwork