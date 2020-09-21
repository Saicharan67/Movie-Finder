import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route path="/" exact component={() => <Finder />} />
          <Route path="/Actor" exact component={() => <Finder />} />
          <Route path="/Director" exact component={() => <Finder />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
