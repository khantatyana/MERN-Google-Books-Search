import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>

        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]} component={Books} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>

    </Router>
  );
}

export default App;