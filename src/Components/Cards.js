import React from "react";

const Cards = ({ isLarge, media, mediaType }) => {
  return (
    <div className={`card ${isLarge ? "card-large" : ""}`}>
      <img
        className="card-image"
        src={media.snippet.thumbnails.high.url}
        alt={media.snippet.title}
      />
      <h4 className="card-title">{media.snippet.title}</h4>
    </div>
  );
};

export default Cards;
