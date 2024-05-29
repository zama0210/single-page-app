import React, { useEffect, useState } from "react";
import { google } from "googleapis";

const TrailerModal = ({ mediaType, mediaId, onClose }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      const API_KEY = "AIzaSyBF0Yv2-fIaPHZDBZBHgPJYtxSlZfYuvq4";
      const youtube = google.youtube({ version: "v3", auth: API_KEY });

      try {
        const response = await youtube.search.list({
          part: "snippet",
          channelId: "MAMAMOO_CHANNEL_ID",
          maxResults: 1,
          type: "video",
        });

        setVideoId(response.data.items[0]?.id.videoId);
      } catch (error) {
        console.error("Error fetching MAMAMOO trailer:", error);
      }
    };

    fetchTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="trailer-modal-backdrop" onClick={onClose} />
      <div className="trailer-modal">
        {videoId && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <button className="trailer-modal__close" onClick={onClose}>
          ✕
        </button>
      </div>
    </>
  );
};

export default TrailerModal;
