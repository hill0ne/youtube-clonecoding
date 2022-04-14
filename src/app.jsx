import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import VideoList from "./components/videoList/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube //
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
