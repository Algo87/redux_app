import React, { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Login from "../routes/Login";

const App = () => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => (user ? setAuth(true) : setAuth(false)));
  }, []);

  function Logout() {
    return (
      <button
        onClick={() => firebase.auth().signOut()}
        className="btn btn-danger text-nowrap"
      >
        Logout
      </button>
    );
  }

  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      {isAuth ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
