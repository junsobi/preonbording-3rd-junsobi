import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./contexts/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
