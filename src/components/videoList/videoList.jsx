import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "./videoList.module.css";

// 부모 컴포넌트의 속성을 받아 ,
// 부모가 가진 videos 를 재구성하고
// 재구성한 video를 VideoItem 컴포넌트의 video 속성에 정의한다.
function VideoList({ videos, onVideoClick, display }) {
  return (
    <ul className={styles.container}>
      {videos.map((video) => (
        <VideoItem
          video={video}
          key={video.id}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
}

export default VideoList;
