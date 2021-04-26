import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { FoF, Main } from "../";

const App = () => {
  // console.log("render");
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
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
