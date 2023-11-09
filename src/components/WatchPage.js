import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div>
            Watch Page
        </div>
    )
}

export default WatchPage;