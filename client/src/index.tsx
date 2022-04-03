import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import "./assets/styles/index.css";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root")  as HTMLElement) ;

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>  
  </StrictMode>
);

