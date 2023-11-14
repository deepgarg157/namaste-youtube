import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  console.log(videos)

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
  };

  return (
    <div>
      {videos.map((video) => <VideoCard key={video.id} cardInfo={video} />)}
    </div>
  )
}

export default VideoContainer;