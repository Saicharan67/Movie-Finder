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
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState({
          ListOfMovies: data.results,
        });
      });
    this.setState({
      currentSearch: "",
    });
  };
  showResults = () => {
    const body = document.getElementsByClassName("results")[0];
    if (this.state.ListOfMovies) {
      this.state.ListOfMovies.forEach((e) => {
        const add = "https://image.tmdb.org/t/p/w185" + e.poster_path;
        body.innerHTML += `
      
      <img src=${add} alt="poster"/>
      <p>${e.original_title}</p>
      
      `;
      });
    }
  };
  render = () => {
    return (
      <div className="root">
        <div className="root-child-1">
          <input
            onChange={this.InputChange}
            value={this.state.currentSearch}
            type="text"
            placeholder="Enter Flower Name"
          ></input>
          <button onClick={this.OnSearch} className="add-btn">
            Search
          </button>
        </div>
        <div className="results">
          {this.state.ListOfMovies.map((movie) => {
            return (
              <MovieClip
                poster={movie.poster_path}
                Name={movie.original_title}
              />
            );
          })}
        </div>
      </div>
    );
  };
}
export default Finder;
