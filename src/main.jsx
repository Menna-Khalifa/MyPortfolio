import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initReveal } from './utils/reveal'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// init reveal after mount
if(window){ setTimeout(()=>initReveal(), 120)}