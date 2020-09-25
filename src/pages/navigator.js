import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navstyle.css";
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
        <div class="container">
          <Link class="navbar-brand" to="/">
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
                  props.location.pathname === "/Movie-Finder/Home"
                    ? "active"
                    : ""
                }`}
              >
                <Link class="nav-link" to="/Movie-Finder/Home">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Movie-Finder/Actor"
                    ? "active"
                    : ""
                }`}
              >
                <Link class="nav-link" to="/Movie-Finder/Actor">
                  Actor
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Movie-Finder/Director"
                    ? "active"
                    : ""
                }`}
              >
                <Link class="nav-link" to="/Movie-Finder/Director">
                  Director
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
