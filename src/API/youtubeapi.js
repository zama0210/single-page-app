import { google } from "googleapis";

const API_KEY = "AIzaSyBF0Yv2-fIaPHZDBZBHgPJYtxSlZfYuvq4";

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});

async function fetchMamaMooVideos() {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      channelId: "MAMAMOO_CHANNEL_ID",
      maxResults: 10,
      type: "video",
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching MAMAMOO videos:", error);
    throw error;
  }
}

async function fetchMamaMooAlbums() {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      channelId: "MAMAMOO_CHANNEL_ID",
      maxResults: 50,
      type: "video",
      q: "MAMAMOO album",
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching MAMAMOO albums:", error);
    throw error;
  }
}

async function fetchMamaMooSingles() {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      channelId: "MAMAMOO_CHANNEL_ID",
      maxResults: 50,
      type: "video",
      q: "MAMAMOO single",
    });

    return response.data.items;
  } catch (error) {
    console.error("Error fetching MAMAMOO singles:", error);
    throw error;
  }
}

async function fetchMamaMooData(mediaType) {
  try {
    if (mediaType === "youtube") {
      return fetchMamaMooVideos();
    } else if (mediaType === "youtube") {
      return fetchMamaMooAlbums();
    } else if (mediaType === "youtube") {
      return fetchMamaMooSingles();
    }
  } catch (error) {
    console.error(`Error fetching Mamamoo ${mediaType}:`, error);
    throw error;
  }
}

export { fetchMamaMooData };
