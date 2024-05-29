import React, { useState, useEffect } from "react";
import { google } from "googleapis";

const Banner = () => {
  const [mamamooArtist, setMamamooArtist] = useState(null);

  useEffect(() => {
    const fetchMamamooArtist = async () => {
      try {
        const API_KEY = "AIzaSyBF0Yv2-fIaPHZDBZBHgPJYtxSlZfYuvq4";
        const youtube = google.youtube({ version: "v3", auth: API_KEY });

        const response = await youtube.search.list({
          part: "snippet",
          q: "MAMAMOO",
          type: "channel",
          maxResults: 1,
        });

        if (response.data.items.length > 0) {
          setMamamooArtist(response.data.items[0].snippet);
        }
      } catch (error) {
        console.error("Error fetching MAMAMOO artist:", error);
      }
    };

    fetchMamamooArtist();
  }, []);

  if (!mamamooArtist) {
    return null;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${mamamooArtist.thumbnails.high.url})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{mamamooArtist.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Listen on Spotify</button>
          <button className="banner__button">Watch on YouTube</button>
        </div>
        <p className="banner__description">{mamamooArtist.description}</p>
      </div>
      <div className="banner__cover" />
    </div>
  );
};

export default Banner;
