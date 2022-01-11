import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Temple from "./screen/Temple"
import Matching from "./screen/Matching"
import Login from "./screen/Login"
import { BrowserRouter,Route,Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Matching/>} />
        <Route exact path="temple" element={<Temple/>} />
        <Route exact path="login" element={<Login/>} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
