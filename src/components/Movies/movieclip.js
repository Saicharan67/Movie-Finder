import React, { useState } from "react";
import "./style.css";

const MovieClip = (props) => {
  const [Url, setUrl] = useState(require("../../assets/123.gif"));
  const myfuc = (event) => {
    props.when(props.id);
  };
  const urlfinder = () => {
    // props.poster
    // ? fetch("https://image.tmdb.org/t/p/w185" + props.poster)
    // : require("../../assets/noimg.png")

    let imageurl = "https://image.tmdb.org/t/p/w185" + props.poster;

    fetch(imageurl)
      .then((res) => {
        if (res.ok) {
          setUrl("https://image.tmdb.org/t/p/original" + props.poster);
        }
      })
      .catch((err) => {
        setUrl(require("../../assets/noimg.png"));
      });
    return Url;
  };
  return (
    <div className="clip">
      <img
        src={
          // urlfinder()
          props.poster
            ? "https://image.tmdb.org/t/p/w185" + props.poster
            : require("../../assets/noimg.png")
        }
        alt="poster"
        className="img"
        onClick={myfuc}
      />
      <p>{props.Name}</p>
    </div>
  );
};
export default MovieClip;
