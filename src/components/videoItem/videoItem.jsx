import React from "react";
import styles from "./videoItem.module.css";

// 부모 컴포넌트의 속성을 받고, 그 속성의 title 값을 <h1> 요소 안에 정의한다.
const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.videoTitle}>{snippet.title}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
