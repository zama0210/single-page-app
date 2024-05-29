import React from "react";
import wireframeImage from "../Assets/wireframe.png";
const Wireframe = () => {
  return (
    <div className="media-card">
      <div className="media-card__cover">
        <h3 className="media-card__name">Wireframes</h3>
        <p className="media-card__description">
          These are the initial wireframes. I have taken inspiration from the
          structure of Netflix and Spotify. I hoped to translate the group's
          content well with a similar structure.
        </p>
        <img
          src={wireframeImage}
          alt="Wireframe"
          className="media-card__image"
        />
      </div>
    </div>
  );
};

export default Wireframes;
