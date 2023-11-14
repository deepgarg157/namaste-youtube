
const VideoCard = ({cardInfo}) =>{

    const {snippet, statistics} = cardInfo;

    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics
    return(
        <div className="m-1 p-2">
           <img className="w-96 rounded-lg cursor-pointer hover:w-[420px]" src={thumbnails.medium.url}></img>
           <p className="w-[350px] font-semibold pt-3 cursor-pointer">{title}</p>
           <p>{viewCount} views</p>
        </div>
    )
}

export default VideoCard;