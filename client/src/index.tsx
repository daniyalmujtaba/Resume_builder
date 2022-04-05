import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";
import App from './App';
import "./assets/styles/index.css";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);