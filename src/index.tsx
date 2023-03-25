import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvKLJcQjaPIUIjot45-NBjGNptS3ik4qk",
  authDomain: "ifc-frontend.firebaseapp.com",
  projectId: "ifc-frontend",
  storageBucket: "ifc-frontend.appspot.com",
  messagingSenderId: "255936102337",
  appId: "1:255936102337:web:04b6e85deeccaab4cf3940"
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
