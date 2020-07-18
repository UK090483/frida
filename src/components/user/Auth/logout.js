import React from "react"
// import firebase from "gatsby-plugin-firebase";
import Button from "../components/Button"

export default function Logout() {
  const logOut = () => {
    console.log("logout")
    // firebase.auth().signOut().then(function () {
    //     // Sign-out successful.
    // }).catch(function (error) {
    //     // An error happened.
    //     console.log(error)
    // });
  }

  return (
    <Button
      label="Logout"
      style={{ pointerEvents: "all" }}
      onClick={() => {
        logOut()
      }}
    ></Button>
  )
}
