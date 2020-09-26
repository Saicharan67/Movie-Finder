import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Finder from "./components/Main.js/main.js";
import Nav from "./pages/navigator.js";
import Footer from "./pages/foooter.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route
            basepath="/Movie-Finder"
            path=""
            exact
            component={() => <Finder />}
          />
          <Route
            basepath="/Movie-Finder"
            path="/Home"
            exact
            component={() => <Finder />}
          />
          <Route
            basepath="/Movie-Finder"
            path="/Actor"
            exact
            component={() => <Finder />}
          />
          <Route
            basepath="/Movie-Finder"
            path="/Director"
            exact
            component={() => <Finder />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
