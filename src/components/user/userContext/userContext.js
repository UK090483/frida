import React, { useState, useEffect } from "react"

// import firebase from "gatsby-plugin-firebase"

import slugify from "slugify"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const UserContext = React.createContext(defaultState)

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [artworks, setArtworks] = useState(null)
  const [options, setOptions] = useState(null)
  const [slider, setSlider] = useState(null)
  const [message, setMessage] = useState(null)
  const [userOptions, setUserOptions] = useState(null)

  useEffect(() => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         console.log('state changed')
    //         if (user) {
    //             setUser(user)
    //         } else {
    //             setUser(false)
    //         }
    //     })
    //     if (user && !artworks) {
    //         firebase
    //             .firestore()
    //             .collection("artworks")
    //             .where('user_id', '==', user.uid)
    //             .get()
    //             .then(function (querySnapshot) {
    //                 let res = []
    //                 querySnapshot.forEach(function (doc) {
    //                     // doc.data() is never undefined for query doc snapshots
    //                     // console.log(doc.id, " => ", doc.data());
    //                     let data = { ...doc.data() }
    //                     data.id = doc.id
    //                     res.push(data)
    //                 });
    //                 setArtworks(res)
    //             })
    //             .catch(function (error) {
    //                 console.log("Error getting documents: ", error);
    //             });
    //         firebase
    //             .firestore()
    //             .collection("einstellungen")
    //             .doc('options')
    //             .get()
    //             .then(function (doc) {
    //                 setOptions(doc.data())
    //             })
    //             .catch(function (error) {
    //                 console.log("Error getting documents: ", error);
    //             });
    //         firebase
    //             .firestore()
    //             .collection("users")
    //             .doc(user.uid)
    //             .get()
    //             .then(function (doc) {
    //                 setUserOptions(doc.data())
    //             })
    //             .catch(function (error) {
    //                 console.log("Error getting documents: ", error);
    //             });
    //     }
  }, [user])

  function createArtwork(artwork) {
    let NextArtwork = { ...artwork }
    NextArtwork.user_id = user.uid
    let file = NextArtwork.file
    NextArtwork.availability = "availabil"
    NextArtwork.createdate = firebase.firestore.Timestamp.fromDate(new Date())
    delete NextArtwork.file
    console.log(artwork)
    // firebase
    //     .firestore()
    //     .collection("artworks").add(NextArtwork)
    //     .then(function (docRef) {
    //         setMessage('Artwork ist Eingereicht');
    //         console.log("Document written with ID: ", docRef.id);
    //         // const addArtworks = [...artworks]
    //         // addArtworks.unshift(NextArtwork)

    //         // setArtworks(addArtworks)

    //         uploadImage(file, docRef.id)

    //     })
    //     .catch(function (error) {

    //         console.error("Error adding document: ", error);
    //     });
  }
  function updateArtwork(artwork, id, setSubmitting) {
    //     firebase
    //         .firestore()
    //         .collection("artworks")
    //         .doc(id)
    //         .set(artwork)
    //         .then(function () {
    //             setMessage(`Artwork ${artwork.title} wurde aktualisiert`);
    //             const index = artworks.findIndex((artwork) => (artwork.id === id))
    //             const nextArtworks = [...artworks]
    //             nextArtworks[index] = artwork
    //             setArtworks(nextArtworks);
    //             setSubmitting(false)
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });
  }

  function editUserOptions(NextuserOptions, setSubmitting) {
    const MergedUserOptions = { ...userOptions, ...NextuserOptions }

    // firebase
    //     .firestore()
    //     .collection("users")
    //     .doc(user.uid)
    //     .set(MergedUserOptions)
    //     .then(function (doc) {
    //         console.log("Document successfully written!");

    //         setMessage(`Deine Daten wurden aktualisiert`);
    //         setSubmitting(false)
    //         setUserOptions(MergedUserOptions)
    //         setSlider(null)
    //     })
    //     .catch(function (error) {
    //         console.log("Error getting documents: ", error);
    //     });
  }

  function uploadImage(file, id) {
    // var storageRef = firebase.storage().ref();
    // var metadata = {
    //     contentType: 'image/jpeg'
    // };
    // let cleanFilename = slugify(file.name, '_');
    // var uploadTask = storageRef.child(`artworks/${id}/picture`).put(file, metadata);
    // // Listen for state changes, errors, and completion of the upload.
    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     function (snapshot) {
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         setMessage('Upload is ' + progress + '% done');
    //         console.log('Upload is ' + progress + '% done');
    //         switch (snapshot.state) {
    //             case firebase.storage.TaskState.PAUSED: // or 'paused'
    //                 console.log('Upload is paused');
    //                 break;
    //             case firebase.storage.TaskState.RUNNING: // or 'running'
    //                 console.log('Upload is running');
    //                 break;
    //         }
    //     }, function (error) {
    //         switch (error.code) {
    //             case 'storage/unauthorized':
    //                 // User doesn't have permission to access the object
    //                 break;
    //             case 'storage/canceled':
    //                 // User canceled the upload
    //                 break;
    //             case 'storage/unknown':
    //                 // Unknown error occurred, inspect error.serverResponse
    //                 break;
    //         }
    //     }, function () {
    //         // Upload completed successfully, now we can get the download URL
    //         uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    //             firebase
    //                 .firestore()
    //                 .collection("artworks")
    //                 .doc(id)
    //                 .update({
    //                     picture: {
    //                         src: downloadURL,
    //                         title: cleanFilename
    //                     }
    //                 })
    //                 .then(function (docRef) {
    //                     setMessage('Artwork ist Eingereicht');
    //                     console.log("Document written with ID: ", docRef.id);
    //                     const addArtworks = [...artworks]
    //                     addArtworks.unshift(NextArtwork)
    //                     setArtworks(addArtworks)
    //                 })
    //                 .catch(function (error) {
    //                     console.error("Error adding document: ", error);
    //                 });
    //             console.log('File available at', downloadURL);
    //         });
    //     });
  }

  return (
    <UserContext.Provider
      value={{
        bla: "bla",
        // user,
        // createArtwork,
        // updateArtwork,
        // setUser,
        // artworks,
        // slider,
        // setSlider,
        // message,
        // setMessage,
        // options,
        // userOptions,
        // setUserOptions,
        // editUserOptions
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }

export default UserContext
