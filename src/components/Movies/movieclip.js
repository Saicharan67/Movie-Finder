import React from "react";
import "./style.css";

const MovieClip = (props) => {
  const myfuc = (event) => {
    props.when(props.id);
  };
  return (
    <div className="clip">
      <img
        src={"https://image.tmdb.org/t/p/w185" + props.poster}
        alt="poster"
        className="img"
        onClick={myfuc}
      />
      <p>{props.Name}</p>
    </div>
  );
};
export default MovieClip;
