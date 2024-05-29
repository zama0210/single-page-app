import React from "react";

import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Slider from "../Components/Slider";
import Academics from "../Components/Academics";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider
        mediaType="youtube"
        title="MAMAMOO MUSIC VIDEOS"
        path="/mamamoo/music-videos"
        params={{ channelId: "MAMAMOO_CHANNEL_ID" }}
        isLarge
      />
      <Slider
        mediaType="youtube"
        title="MAMAMOO ALBUMS"
        path="/mamamoo/albums"
      />
      <Slider
        mediaType="youtube"
        title="MAMAMOO COLLABORATIONS"
        path="/mamamoo/collaborations"
        params={{ artistId: "MAMAMOO_ARTIST_ID" }}
      />
      <Academics />
    </div>
  );
};

export default HomePage;
