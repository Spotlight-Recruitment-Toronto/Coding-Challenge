import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactCodingChallenge from "./challenges/ReactCodingChallenge";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/react">
          <ReactCodingChallenge />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
