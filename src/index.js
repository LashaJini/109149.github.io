import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import App from "./tmp/Jiggle";
import ReactGA from "react-ga";
import { App } from "./components";
// import reportWebVitals from "./reportWebVitals";
ReactGA.initialize("UA-195419895-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
