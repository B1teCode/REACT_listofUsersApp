import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import './css/main.css';

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)
