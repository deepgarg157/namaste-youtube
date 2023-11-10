import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import CommentsContainer from "./CommentContainer";

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div >
            <iframe className="rounded-xl"
                width="850"
                height="450"
                src="https://www.youtube.com/embed/YT8rY_o5VhY?si=K0ApumBwh_0jdK-J"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <CommentsContainer />
        </div>
    )
}

export default WatchPage;