import React, { useEffect, useState } from "react";
import "./components/header/header.css";
import Header from "./components/header/header";
import VideoList from "./components/videoList/videoList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBeAQkki_rYvGVVbuzPqA9n3sumPBUY_5A",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
