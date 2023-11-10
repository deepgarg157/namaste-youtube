import { YOUTUBE_SEARCH_API, user_Logo } from "../utility/constants";
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utility/appSlice"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

    const [searchQuery, setSearchQuery] = useState("")

    const [suggestion, setSuggestion] = useState([])

    const [showSuggestion, setShowSuggestion] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => getSearchSugsestions(), 200);

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSugsestions = async () => {
        console.log(searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestion(json[1])
    }

    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col p-2 m-2">
            <div className="flex ">
                <img onClick={() => toggleMenuHandler()} className="w-10 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"></img>
                <a href="/"><img className="w-20 ml-4 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"></img></a>
            </div>
            <div className="col-span-8 ">
                <div className="text-center" >
                    <input type="text"
                        placeholder="Search"
                        className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    ></input>
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full">🔍</button>
                </div>

                {showSuggestion && <div className="fixed left-[510px] py-2 px-5 my-1 bg-white w-[555px] rounded-xl shadow-2xl">
                    <ul>
                        {suggestion.map((s) => <li key={s} className="py-2 hover:bg-gray-200">🔍 {s}</li>)}
                    </ul>
                </div>}

            </div>
            <div className="col-span-1">
                <img className="w-10 text-end" src={user_Logo}>
                </img>
            </div>
        </div>
    )
}




export default Header;
