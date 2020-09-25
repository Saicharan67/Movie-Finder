import { ReactComponent } from "*.svg";
import React from "react";
import "./style.css";
class Actor extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      ListOfMovies: [],
      visible: false,
    };
  }
}
