import React from "react";
import "./style.css";

const MovieClip = (props) => {
  const onclicked = () => {
    const key = "4b7adfd71821a32644eb8175d4a485eb";
    const base = `https://api.themoviedb.org/3/movie/${props.id}?api_key=${key}`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="clip">
      <img
        src={"https://image.tmdb.org/t/p/w185" + props.poster}
        alt="poster"
        className="img"
        onClick={onclicked}
      />
      <p>{props.Name}</p>
    </div>
  );
};
export default MovieClip;
