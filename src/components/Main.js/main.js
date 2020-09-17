import React from "react";
import "./style.css";
import MovieClip from "../Movies/movieclip.js";
class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      ListOfMovies: [],
    };
  }
  InputChange = (event) => {
    this.setState({
      currentSearch: event.target.value,
    });
  };
  OnSearch = () => {
    const a = this.state.currentSearch;
    const base = "https://api.themoviedb.org/3/search/movie?";
    const key = "4b7adfd71821a32644eb8175d4a485eb";
    const url = base + "api_key=" + key + "&query=" + a;
    this.setState({
      ListOfMovies: [],
    });
    this.Ondata();
    document.getElementsByClassName("loading")[0].style.display = "block";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const v = data.results.filter((res) => {
          return res.poster_path !== null;
        });

        if (v.length != 0) {
          this.Ondata();
          document.getElementsByClassName(
            "search"
          )[0].innerHTML = `<h2>Search Results For " ${a} "</h2>`;
          this.setState({
            ListOfMovies: v,
          });
        } else {
          this.OnNodata();
        }
        document.getElementsByClassName("loading")[0].style.display = "none";
      });
    this.setState({
      currentSearch: "",
    });
  };
  Ondata = () => {
    document.getElementsByClassName("nodata-img")[0].style.display = "none";
  };
  OnNodata = () => {
    document.getElementsByClassName("nodata-img")[0].style.display = "block";
    document.getElementsByClassName("search")[0].innerHTML = "";
  };
  OnSearchEnter = (event) => {
    if (event.key == "Enter") {
      this.OnSearch();
    }
  };

  render = () => {
    return (
      <div className="root">
        <div className="root-child-1">
          <h2>Movie Finder</h2>
          <input
            onChange={this.InputChange}
            value={this.state.currentSearch}
            type="text"
            placeholder="Enter Movie Name"
            onKeyPress={this.OnSearchEnter}
          ></input>
          <button onClick={this.OnSearch} className="add-btn">
            Search
          </button>
        </div>
        <div className="loading">
          <img src={require("../../assets/gear.gif")} />
        </div>
        <div className="search"></div>
        <div className="results">
          <img
            src={require("../../assets/Nodata.jpg")}
            alt="nodata"
            className="nodata-img"
          />
          {this.state.ListOfMovies.map((movie) => {
            return (
              <MovieClip
                id={movie.id}
                poster={movie.poster_path}
                Name={movie.title}
              />
            );
          })}
        </div>
      </div>
    );
  };
}
export default Finder;
//github
