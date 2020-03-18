import React from "react";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button
      onClick={() => {
        props.history.push("/");
      }}
      className="home-button"
    >
      Home
    </button>
  </div>
);

export default SavedList;
// {/* <button
//         onClick={() => {
//           props.history.push("/items-list");
//         }}
//         className="md-button shop-button"
//       >
//         Shop now! */}
