import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import api from "./api";
import jwt_decode from "jwt-decode";
import { setUsername } from "./redux/user.slice";

const token = localStorage.getItem("token");

if (token) {
  const decodedToken = jwt_decode(token);
  console.log(decodedToken);
  store.dispatch(setUsername(decodedToken.username));
}

/* If username is not in JWT payload: */
//   fetchUsername(decodedToken?.id)
//     .then((username) => store.dispatch(setUsername(username)))
//     .catch((error) => console.log("Error fetching username:", error));
// }

// function fetchUsername(id) {
//   return new Promise((resolve, reject) => {
//     api
//       .get(`/users/${id}`)
//       .then((res) => resolve(res.data.username))
//       .catch((error) => reject(error));
//   });
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
