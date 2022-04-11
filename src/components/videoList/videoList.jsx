import VideoItem from "../videoItem/videoItem";
import "./videoList.css";

// 부모 컴포넌트의 속성을 받아 ,
// 부모가 가진 videos 를 재구성하고
// 재구성한 video를 VideoItem 컴포넌트의 video 속성에 정의한다.
function VideoList(props) {
  return (
    <section>
      <ul className="contaier-videoList">
        {props.videos.map((video) => (
          <VideoItem video={video} key={video.id} />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
