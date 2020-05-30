import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js";
import Links from "./components/Links.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
    <NavBar />
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/links">
          <Links />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
