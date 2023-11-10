import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utility/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () =>{

    useEffect(() => {
        getVideos();
      }, []);
    
      const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
      };

    return(
        <div>
            <VideoCard />
        </div>
    )
}

export default VideoContainer;