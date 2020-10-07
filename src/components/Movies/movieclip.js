import React from "react";
import "./style.css";

const MovieClip = (props) => {
  const myfuc = (event) => {
    props.when(props.id);
  };
  const urlfinder = () => {
    let url = "https://image.tmdb.org/t/p/w185" + props.poster;
    // props.poster
    // ? fetch("https://image.tmdb.org/t/p/w185" + props.poster)
    // : require("../../assets/noimg.png")
    fetch(url)
      .then((res) => {
        if (res.ok) {
          url = "https://image.tmdb.org/t/p/w185" + props.poster;
        }
      })
      .catch((err) => {
        url = require("../../assets/noimg.png");
      });
    return url;
  };
  return (
    <div className="clip">
      <img src={urlfinder()} alt="poster" className="img" onClick={myfuc} />
      <p>{props.Name}</p>
    </div>
  );
};
export default MovieClip;
