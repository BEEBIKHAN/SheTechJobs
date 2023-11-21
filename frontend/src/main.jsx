import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/homepage.css";
import "./styles/footer.css";
import "./styles/app.css";
import "./styles/registercandidate.css";
import "./styles/logincandidate.css";
import "./styles/navbar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
