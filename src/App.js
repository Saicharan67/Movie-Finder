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
import Actor from "./components/Actor/Actor.js";
import Finder from "./components/Main.js/main.js";
import Nav from "./pages/Nav/navigator.js";
import Footer from "./pages/Foot/foooter.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Finder />} />
          <Route path="/" exact component={() => <Finder />} />
          <Route path="/actor" exact component={() => <Actor />} />
          <Route path="/Director" exact component={() => <Finder />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
