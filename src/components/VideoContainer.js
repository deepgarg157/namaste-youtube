import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap">
      {videos.map((video) => <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard cardInfo={video} />
        </Link>)}
    </div>
  )
}

export default VideoContainer;