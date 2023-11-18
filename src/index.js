import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import userReducer from "./features/user";
import themeReducer from "./features/Theme";
import counterReducer from "./features/Counter";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    counter: counterReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
