import React from "react";
import {
  BrowserRouter as Router,
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
          <Route path="" exact component={() => <Finder />} />
          <Route path="/Movie-Finder/Home" exact component={() => <Finder />} />
          <Route
            path="/Movie-Finder/Actor"
            exact
            component={() => <Finder />}
          />
          <Route
            path="/Movie-Finder/Director"
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
