import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className="w-full">
            <div className="flex">
                <div>
                    <iframe className="rounded-xl"
                        width="850"
                        height="450"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="w-full">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage;
