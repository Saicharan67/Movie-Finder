import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navstyle.css";
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
        <div class="container">
          <Link class="navbar-brand" to="/Movie-Finder">
            Movie Finder
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Movie-Finder" ? "active" : ""
                }`}
              >
                <Link
                  class="nav-link"
                  activeClassName="active"
                  to="/Movie-Finder"
                >
                  Movie
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/actor" ? "active" : ""
                }`}
              >
                <Link class="nav-link" activeClassName="active" to="/actor">
                  Actor
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/trending" ? "active" : ""
                }`}
              >
                <Link class="nav-link" activeClassName="active" to="/trending">
                  Trending
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
