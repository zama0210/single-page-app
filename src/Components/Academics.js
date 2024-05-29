import React from "react";
import Styleguide from "./Styleguide";
import Essay from "./essay";
import Wireframes from "./Wireframes";

const Academics = () => {
  return (
    <div className="media-slider">
      <h2 className="media-slider__title">Academics</h2>
      <div className="media-slider__cards">
        <Styleguide />
        <BlogPost />
        <Wireframe />
      </div>
    </div>
  );
};

export default Academics;
