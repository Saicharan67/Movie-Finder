import React from "react";
import "./style.css";

const MovieClip = (props) => {
  const myfuc = (event) => {
    props.when(props.id);
  };
  return (
    <div className="clip">
      <img
        src={
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
