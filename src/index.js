import ReactDOM from "react-dom";
import React from "react";
import { App } from "./lib";

const root = document.getElementById("root");

// Utilisation de createRoot() depuis "react-dom/client"
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
