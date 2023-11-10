import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

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
                        src="https://www.youtube.com/embed/YT8rY_o5VhY?si=K0ApumBwh_0jdK-J"
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
