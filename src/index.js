import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as firebase from "firebase/app";

import todoApp from "./reducers";
import App from "./components/App";

const firebaseConfig = {
  apiKey: "AIzaSyA-3GH_FYNWvUZ6gLu4-t1WlUXdh6YQSoA",
  authDomain: "todolist-837f1.firebaseapp.com",
  databaseURL: "https://todolist-837f1.firebaseio.com",
  projectId: "todolist-837f1",
  storageBucket: "todolist-837f1.appspot.com",
  messagingSenderId: "484451084170",
  appId: "1:484451084170:web:794a42fbb13e823136ca73",
};

firebase.initializeApp(firebaseConfig);

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
