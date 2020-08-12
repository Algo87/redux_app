import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import isLogin from '../actions'

const provider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  function googleLogin() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        isLogin(result);
       return  console.log(result)
      })
      .catch((error) => console.error(error));
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
    <button onClick={(e)=>{
      e.preventDefault();
      googleLogin()
    }} className="btn btn-primary text-nowrap">
      Login with Google
    </button>
    </form>
  );
}
