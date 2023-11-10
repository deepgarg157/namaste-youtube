import { user_Logo } from "../utility/constants";

const ChatMessage = ({ name, text }) => {
    return (
        <div className="flex m-2 hover:bg-slate-100">
            <div>
                <img className="w-8 text-end" src={user_Logo}></img>
            </div>
            <div className="flex items-center">
                <p className="font-bold px-3">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage;
