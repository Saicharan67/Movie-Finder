import React from "react";
import "./Style.css";
import MovieClip from "../Movies/movieclip.js";
import Modal from "react-awesome-modal";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
class Actor extends React.Component {
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
    if (a.length === 0) {
      alert("Please Enter any Movie Name");
      return;
    }
    const base = "https://api.themoviedb.org/3/search/person?";
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
        data.results.forEach((res) => {
          console.log(res.known_for_department, res.name, res.profile_path);
          res.known_for.forEach((movie) => {
            console.log(movie.poster_path, movie.original_title);
            console.log("---------------------");
          });
          console.log("******************************");
          // return res.known_for.poster_path !== null;
        });

        if (data.results.length != 0) {
          this.Ondata();
          document.getElementsByClassName(
            "search"
          )[0].innerHTML = `<h2>Search Results For " ${
            a.charAt(0).toUpperCase() + a.slice(1)
          } "</h2>`;
          this.setState({
            ListOfMovies: data.results,
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
    alert("clicked");
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
            placeholder="Enter Actor Name"
            onKeyPress={this.OnSearchEnter}
          ></input>
          <button onClick={this.OnSearch} className="btn-grad">
            Search
          </button>
        </div>
        <div className="loading">
          <img src={require("../../assets/gear.gif")} />
        </div>

        <Modal
          visible={this.state.visible}
          // width="800"
          // height="700"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <div className="Modal2"></div>
        </Modal>

        <div className="search"></div>
        <div>
          <img
            src={require("../../assets/Nodata.jpg")}
            alt="nodata"
            className="nodata-img"
          />
          <div className="actor">
            {this.state.ListOfMovies.map((res) => {
              return (
                <div className="divisions">
                  <h3 className="heading">
                    Name:{res.name} Known_For:{res.known_for_department}
                  </h3>

                  <img
                    style={{ width: 200, height: 300 }}
                    src={"https://image.tmdb.org/t/p/w185" + res.profile_path}
                    alt="profile pic"
                  />

                  <div className="results">
                    {res.known_for.map((movie) => {
                      return (
                        <MovieClip
                          id={movie.id}
                          poster={movie.poster_path}
                          Name={movie.original_title}
                          when={this.showMovie}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
}
export default Actor;

//https://api.themoviedb.org/3/search/person?api_key=4b7adfd71821a32644eb8175d4a485eb&query=<KEYWORD>
