// import React, { useState, useEffect, useContext } from 'react';


// import firebase from "gatsby-plugin-firebase"




// export function editUserOptions(NextuserOptions, setSubmitting) {

//     const context = useContext(UserContext);
//     const { setSlider, userOptions, setMessage, setUserOptions } = context;


//     const MergedUserOptions = { ...userOptions, ...NextuserOptions }

//     firebase
//         .firestore()
//         .collection("users")
//         .doc(user.uid)
//         .set(MergedUserOptions)
//         .then(function (doc) {
//             console.log("Document successfully written!");

//             setMessage(`Deine Daten wurden aktualisiert`);
//             setSubmitting(false)
//             setUserOptions(MergedUserOptions)
//             setSlider(null)
//         })
//         .catch(function (error) {
//             console.log("Error getting documents: ", error);
//         });

// }

