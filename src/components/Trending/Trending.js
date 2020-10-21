import React from "react";
import "./style.css";
import MovieClip from "../Movies/movieclip.js";
import Modal from "react-awesome-modal";
import ScrollUpButton from "react-scroll-up-button";
class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch_time: "",
      currentSearch_show: "",
      ListOfMovies: [],
      ListOfPersons: [],
      visible: false,
      imdb: "",
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
  OnSearch = () => {
    document.getElementsByClassName("search")[0].innerHTML = "";
    const a = this.state.currentSearch_time;
    const b = this.state.currentSearch_show;
    if (a.length === 0) {
      alert("Please Enter any Movie Name");
      return;
    }
    const base = "https://api.themoviedb.org/3/trending/";
    //{select movie/all/tv/person}/{select day/week}";
    const key = "4b7adfd71821a32644eb8175d4a485eb";
    const url = base + b + "/" + a + "?api_key=" + key;
    console.log(url);
    this.setState({
      ListOfMovies: [],
      ListOfPersons: [],
    });
    this.Ondata();
    document.getElementsByClassName("loading")[0].style.display = "block";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.results.length != 0) {
          this.Ondata();
          if (b == "person") {
            this.setState({
              ListOfPersons: data.results,
            });
          } else {
            this.setState({
              ListOfMovies: data.results,
            });
          }
        } else {
          this.OnNodata();
        }
        document.getElementsByClassName("loading")[0].style.display = "none";
      });
  };
  Ondata = () => {
    document.getElementsByClassName("nodata-img")[0].style.display = "none";
  };
  OnNodata = () => {
    document.getElementsByClassName("nodata-img")[0].style.display = "block";
    document.getElementsByClassName("search")[0].innerHTML = "";
  };
  onTimechange = (event) => {
    this.setState({
      currentSearch_time: event.target.value,
    });
  };
  onShowchange = (event) => {
    this.setState({
      currentSearch_show: event.target.value,
    });
  };
  showMovie = (movieid) => {
    const imdburl =
      "https://api.themoviedb.org/3/movie/" +
      movieid +
      "/external_ids?api_key=4b7adfd71821a32644eb8175d4a485eb";
    fetch(imdburl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          imdb: data.imdb_id,
        });
      });
    document.getElementsByClassName(
      "Modal2"
    )[0].innerHTML = ` <img src=${require("../../assets/loadin2.gif")}  />`;
    this.openModal();
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieid +
      "?api_key=4b7adfd71821a32644eb8175d4a485eb";
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const gen = data.genres.map((g) => {
          return g.name;
        });
        document.getElementsByClassName("Modal2")[0].innerHTML = `<div>
        <img src=${
          data.poster_path
            ? "https://image.tmdb.org/t/p/w185" + data.poster_path
            : require("../../assets/noimg.png")
        } alt="poster" /></div>
        <h3> OverView      :      ${
          data.overview ? data.overview : "No-data"
        }</h3>
        <h3> Title      :     ${data.title ? data.title : "No-data"}</h3>    
        <h3> Budget      :      ${data.budget ? data.budget : "No-data"}</h3>
        <h3> Genres      :      ${gen}</h3>
        <h3>Revenue      :     ${data.revenue ? data.revenue : "No-data"}</h3>
        <a href='https://www.imdb.com/title/${
          this.state.imdb
        }' target="blank">More Details</a>
        `;
      });
  };
  render = () => {
    return (
      <div className="root">
        <div className="root-child-1">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <select
              onChange={this.onTimechange}
              value={this.state.currentSearch_time}
            >
              <option value="" disabled>
                Choose Time
              </option>
              <option value="day">Day</option>
              <option value="week">Week</option>
            </select>
            <select
              onChange={this.onShowchange}
              value={this.state.currentSearch_show}
            >
              <option value="" disabled>
                Choose Show
              </option>
              <option value="all">All</option>
              <option value="tv">Tv</option>
              <option value="movie">Movie</option>
              <option value="person">Person</option>
            </select>
          </div>
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
            {this.state.ListOfPersons.map((res) => {
              return (
                <div className="divisions">
                  
                  <h4 className="headings">Name &nbsp; : &nbsp;{res.name}</h4>
                  <h4 className="headings">
                    Known For&nbsp; :&nbsp; {res.known_for_department}
                  </h4>
                  <img
                    style={{ width: 200, height: 300 }}
                    src={
                      res.profile_path
                        ? "https://image.tmdb.org/t/p/w185" + res.profile_path
                        : ""
                    }
                    alt="profile pic"
                  />

                  <div className="results">
                    {res.known_for.map((movie) => {
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
            })}
          </div>
          <div className="results">
            {this.state.ListOfMovies.map((movie) => {
              return (
                <MovieClip
                  id={movie.id}
                  poster={movie.poster_path}
                  Name={movie.title ? movie.title : movie.original_name}
                  when={this.showMovie}
                />
              );
            })}
          </div>
        </div>
        <div>
          <ScrollUpButton
            ContainerClassName="AnyClassForContainer"
            TransitionClassName="AnyClassForTransition"
          ></ScrollUpButton>
        </div>
      </div>
    );
  };
}
//https://api.themoviedb.org/3/trending/{select movie/all/tv/person}/{select day/week}?api_key=4b7adfd71821a32644eb8175d4a485eb
export default Trending;
