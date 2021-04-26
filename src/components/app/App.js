import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FoF, Main } from "../";

const App = () => {
  // console.log("render");
  return (
    <Router>
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
