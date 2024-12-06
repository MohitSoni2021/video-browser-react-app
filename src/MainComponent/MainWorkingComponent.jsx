import React, { useState } from "react";
import axios from "axios";

const YouTubeSearch = ({userQuery}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoDetails, setVideoDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyDO2qMZdlpyEUkZ9nthdmGho9Q_6hZem3o";  // Replace with your YouTube API key

  // Function to handle the search
  const searchVideos = async () => {

    setSearchQuery(userQuery)



    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    try {
      // First, search for videos based on the query
      const searchResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            q: searchQuery,
            type: "video",
            maxResults: 20,
            key: API_KEY,
          },
        }
      );

      // Extract video IDs from the search results
      const videoIds = searchResponse.data.items.map(item => item.id.videoId);

      // Now, fetch detailed information about the videos using the video IDs
      const videosResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: "snippet,statistics",
            id: videoIds.join(","),
            key: API_KEY,
          },
        }
      );

      // Set the video details in the state
      setVideoDetails(videosResponse.data.items);
    } catch (err) {
      setError("Something went wrong while fetching video details.");
      console.error(err);
    } finally {
      setLoading(false);
    }


    console.log(videoDetails)
  };

  return (
    <div>
      <h1>YouTube Video Search</h1>

      {/* Search input and button */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for videos"
      />
      <button onClick={searchVideos} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Video details display */}
      <div>
        {videoDetails.length > 0 ? (
          videoDetails.map((video) => (
            <div key={video.id}>
              <h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.snippet.title}
                </a>
              </h3>
              <p>{video.snippet.description}</p>
              <p>Views: {video.statistics.viewCount}</p>
              <p>Likes: {video.statistics.likeCount}</p>
            </div>
          ))
        ) : (
          !loading && <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearch;
