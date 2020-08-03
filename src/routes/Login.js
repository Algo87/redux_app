import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

const provider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  function googleLogin() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <button onClick={googleLogin} className="btn btn-primary text-nowrap">
      Login with Google
    </button>
  );
}
