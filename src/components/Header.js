import { user_Logo } from "../utility/constants";
import {useDispatch} from "react-redux"
import {toggleMenu }from "../utility/appSlice"

function Header() {

    const dispatch = useDispatch()

    const toggleMenuHandler =()=>{
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col p-2 m-2">
            <div className="flex ">
                <img onClick={()=>toggleMenuHandler()} className="w-10 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"></img>
                <img className="w-20 ml-4 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"></img>
            </div>
            <div className="col-span-8 text-center" >
                <input type="text" placeholder="Search" className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full"></input>
                <button className="border border-gray-400 px-5 py-2 rounded-r-full">🔍</button>
            </div>
            <div className="col-span-1">
                <img className="w-10 text-end" src={user_Logo}>
                </img>
            </div>
        </div>
    )
}

export default Header;
