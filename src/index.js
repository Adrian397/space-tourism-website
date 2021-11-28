import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import PlanetContextProvider from "./store/planet-context";
import TechnologyContextProvider from "./store/technology-context";
import CrewContextProvider from "./store/crew-context";

ReactDOM.render(
  <BrowserRouter>
    <PlanetContextProvider>
      <CrewContextProvider>
        <TechnologyContextProvider>
          <App />
        </TechnologyContextProvider>
      </CrewContextProvider>
    </PlanetContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
