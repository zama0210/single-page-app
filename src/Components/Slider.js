import React, { useState, useEffect } from "react";
import { fetchMamaMooData } from "../API/youtubeapi";
import Cards from "./Cards";

const Slider = ({ mediaType, title, path, params = {}, isLarge }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetchMamaMooData(mediaType);
        setItems(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [mediaType, path, params]);

  return (
    <div className="media-slider">
      <h3 className="media-slider__title">{title}</h3>
      <div className="media-slider__cards">
        {items.map((media) => (
          <Cards
            isLarge={isLarge}
            key={media.id.videoId}
            media={media}
            mediaType={mediaType}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
