import React from "react";
import "./style.css";
import MovieClip from "../Movies/movieclip.js";
import Modal from "react-awesome-modal";
class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: "",
      ListOfMovies: [],
      visible: false,
    };
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }
  InputChange = (event) => {
    this.setState({
      currentSearch:
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1),
    });
  };
  OnSearch = () => {
    document.getElementsByClassName("search")[0].innerHTML = "";
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
        console.log(v);

        if (v.length != 0) {
          this.Ondata();
          document.getElementsByClassName(
            "search"
          )[0].innerHTML = `<h2>Search Results For " ${
            a.charAt(0).toUpperCase() + a.slice(1)
          } "</h2>`;
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
  showMovie = (movieid) => {
    document.getElementsByClassName(
      "Modal2"
    )[0].innerHTML = ` <img src=${require("../../assets/loadin2.gif")}  />`;
    this.openModal();
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieid +
      "?api_key=4b7adfd71821a32644eb8175d4a485eb";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const gen = data.genres.map((g) => {
          return g.name;
        });
        document.getElementsByClassName("Modal2")[0].innerHTML = `
        <img src=${
          "https://image.tmdb.org/t/p/w185" + data.poster_path
        } alt="poster"/>
        <h3> Title      :      ${data.title}</h3>
        <h3> OverView      :      ${data.overview}</h3>
        <h3> Budget      :      ${data.budget}</h3>
        <h3> Genres      :      ${gen}</h3>
        <h3>Revenue      :     ${data.revenue}</h3>
        `;
      });
  };
  render = () => {
    return (
      <div className="root">
        <div className="root-child-1">
          <h2 className="title">Movie Finder</h2>
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
        <Modal
          visible={this.state.visible}
          width="600"
          height="700"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <div className="Modal2"></div>
        </Modal>
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
                when={this.showMovie}
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
