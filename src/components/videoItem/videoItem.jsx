import React from "react";

// 부모 컴포넌트의 속성을 받고, 그 속성의 title 값을 <h1> 요소 안에 정의한다.
const VideoItem = (props) => <h1>{props.video.snippet.title}</h1>;

export default VideoItem;
