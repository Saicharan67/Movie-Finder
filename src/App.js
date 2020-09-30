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
import Trending from "./components/Trending/Trending.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Movie-Finder" exact component={() => <Finder />} />
          <Route path="/Movie-Finder" exact component={() => <Finder />} />
          <Route path="/actor" exact component={() => <Actor />} />
          <Route path="/Trending" exact component={() => <Trending />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
