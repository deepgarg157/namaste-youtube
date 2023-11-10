import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className="px-4 m-2">
            <ul className="border-b border-gray-200 w-36 py-3">
                <li className="py-2"><Link to="/">Home</Link></li>
                <li className="py-2">Shorts</li>
                <li className="py-2">Subscriptions</li>
            </ul>
            <h1 className="font-bold text-lg pt-3">You</h1>
            <ul className="border-b border-gray-200 w-36">
                <li className="py-2">Your Channel</li>
                <li className="py-2">History</li>
                <li className="py-2">Your Videos</li>
                <li className="py-2">Watch Later</li>
                <li className="py-2">Downloads</li>
                <li className="py-2">Show More</li>
            </ul>
            <h1 className="font-bold text-lg pt-3">Subscriptions</h1>
            <ul className="border-b border-gray-200 w-36">
                <li className="py-2">HTML</li>
                <li className="py-2">Java Script</li>
            </ul>
        </div>
    )
}

export default SideBar;