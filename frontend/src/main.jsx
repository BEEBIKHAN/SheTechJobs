import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ExportContext from "./contexts/Context";

import "./styles/homepage.css";
import "./styles/footer.css";
import "./styles/app.css";
import "./styles/registercandidate.css";
import "./styles/dashboardcandidate.css";
import "./styles/dashboardcompany.css";
import "./styles/spacecompany.css";
import "./styles/publishoffer.css";
import "./styles/connection_candidate.css";
import "./styles/navbar.css";
import "./styles/annoncecard.css";
import "./styles/annoncedetails.css";
import "./styles/monespace.css";
import "./styles/moncv.css";
import "./styles/myoffers.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExportContext.Provider>
        <App />
      </ExportContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
