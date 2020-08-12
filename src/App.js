import React, {useState, useEffect} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Login from "./routes/Login";
import isLogin, {isLogout} from "./actions";
import Register from "./routes/Register";


const App = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
          user ? dispatch(isLogin(true)) : dispatch(isLogin(false));
          setIsAuthChecked(true);
        }
      );
  }, [isAuthChecked, dispatch]);

  function Logout() {
    return (
      <button
        onClick={() =>{
          dispatch(isLogout(true))
         return (firebase.auth().signOut())
        }}
        className="btn btn-danger text-nowrap"
      >
        Logout
      </button>
    );
  }

  function PrivateRoute({children, isAuthChecked, ...rest}) {
    const isAuthRedux = useSelector((state) => {
      return isAuthChecked? state.LoginReducer.isAuth: false;
    });
    return (
      <Route
        {...rest}
        render={() => {
          if (isAuthRedux && isAuthChecked) {
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

  function LoginRoute({children, isAuthChecked, ...rest}){
    const isAuthRedux = useSelector((state) => {
      return isAuthChecked? state.LoginReducer.isAuth: false;
    });
    return (
      <Route
        {...rest}
        render={() => {
          if (isAuthRedux && isAuthChecked) {
            return <Redirect to="/"/>
          } else if (!isAuthChecked) {
            return <p>loding...</p>
          } else {
            return (children)
          }
        }}
      />
    );
  }

  return (
    <div className="container p-3 p-md-5">
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <LoginRoute exact path="/login" isAuthChecked={isAuthChecked}>
          <Login/>
        </LoginRoute>
        <PrivateRoute exact path="/" isAuthChecked={isAuthChecked} >
          <React.Fragment>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
            <Logout/>
          </React.Fragment>
        </PrivateRoute>
      </Switch>
    </Router>
    </div>
  );
};

export default App;
