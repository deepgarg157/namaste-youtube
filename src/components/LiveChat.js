import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utility/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utility/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const messages = useSelector(store => store.chat.messages)

    const dispatch = useDispatch()

    useEffect(() => {
        const i = setInterval(() => {

            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: makeRandomMessage() + " 🚀",
                }
            ))
        }, 1000)

        return () => clearInterval(i);

    }, [])

    return (
        <div >
            <div className=" px-2 m-2 w-full h-[440px] flex-col-reverse flex overflow-y-scroll border border-slate-400 rounded-xl">
                {messages.map((chat) => <ChatMessage name={chat.name} text={chat.text} />)}

            </div>

            <form className="w-full border border-black mx-2 rounded-md" onSubmit={(e) => {
                e.preventDefault()

                dispatch(
                    addMessage({
                        name: "Deepanshu",
                        text: liveMessage
                    })
                )

                setLiveMessage("")
            }}
            >
                <input value={liveMessage} className="w-[370px] border border-black m-2 px-3" type="text" placeholder="Chat here...................." onChange={(e) => {
                    setLiveMessage(e.target.value)
                }}></input>

                <button className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-200">Send</button>
            </form>

        </div>
    )
}

export default LiveChat;