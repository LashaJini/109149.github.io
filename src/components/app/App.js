import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { FoF, Main, AppV2 as MainV2 } from "../";

document.body.setAttribute("overflow", "hidden");

const App = () => {
  // console.log("render");
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <MainV2 />
        </Route>
        <Route exact path="/old">
          <Main />
        </Route>
        <Route exact path="*">
          <FoF />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
