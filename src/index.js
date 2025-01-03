import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import './index.css'

const AppRoot = ReactDom.createRoot(document.getElementById('root'));

AppRoot.render(<App/>)