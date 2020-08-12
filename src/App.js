import React, {useState, useEffect} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Login from "./routes/Login";

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
          user ? setAuth(true) : setAuth(false);
          setIsAuthChecked(true);
          return (user ? setAuth(true) : setAuth(false));
        }
      );
  }, [isAuthChecked, isAuth]);

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

  function PrivateRoute({children, isAuth, isAuthChecked, ...rest}) {
    return (
      <Route
        {...rest}
        render={() => {
          if (isAuth && isAuthChecked) {
            return (children)
          } else if (!isAuthChecked) {
            return <p>loding...</p>
          } else {
            return <Redirect to="/login"/>
          }
        }}
      />
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/" isAuthChecked={isAuthChecked} isAuth={isAuth}>
          <div className="container p-3 p-md-5">
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
            <Logout/>
          </div>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
